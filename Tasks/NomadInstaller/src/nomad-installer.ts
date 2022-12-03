import tasks = require('azure-pipelines-task-lib/task');
import tools = require('azure-pipelines-tool-lib/tool');
import path = require('path');
import os = require('os');
import fs = require('fs');

const uuidV4 = require('uuid/v4');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

const nomadToolName = "nomad";
const isWindows = os.type().match(/^Win/);
const proxy = tasks.getHttpProxyConfiguration();
export async function downloadNomad(inputVersion: string): Promise<string> {
    var latestVersion: string = "";
    if(inputVersion.toLowerCase() === 'latest') {
        console.log(tasks.loc("GettingLatestNomadVersion"));
        if(proxy == null){
            await fetch('https://checkpoint-api.hashicorp.com/v1/check/nomad')
            .then((response: { json: () => any; }) => response.json())
            .then((data: { [x: string]: any; }) => {
                latestVersion = data.current_version;
            })
            .catch((exception: any) => {
                console.warn(tasks.loc("NomadVersionNotFound"));

                latestVersion = '1.1.6';
            })
        }
        else
        {

            var proxyUrl = proxy.proxyUsername !="" ? proxy.proxyUrl.split("://")[0] + '://' + proxy.proxyUsername + ':' + proxy.proxyPassword + '@' + proxy.proxyUrl.split("://")[1]:proxy.proxyUrl;
            var proxyAgent = new HttpsProxyAgent(proxyUrl);
            await fetch('https://checkpoint-api.hashicorp.com/v1/check/nomad', { agent: proxyAgent})
            .then((response: { json: () => any; }) => response.json())
            .then((data: { [x: string]: any; }) => {
                latestVersion = data.current_version;
            })
            .catch((exception: any) => {
                console.warn(tasks.loc("NomadVersionNotFound"));
                latestVersion = '1.1.6';
            })
        }
    }
    var version = latestVersion != "" ? tools.cleanVersion(latestVersion) : tools.cleanVersion(inputVersion);

    if (!version) {
        throw new Error(tasks.loc("InputVersionNotValidSemanticVersion", inputVersion));
    }

    let cachedToolPath = tools.findLocalTool(nomadToolName, version);
    if (!cachedToolPath) {
        let nomadDownloadUrl = getNomadDownloadUrl(version);
        let fileName = `${nomadToolName}-${version}-${uuidV4()}.zip`;
        let nomadDownloadPath;

        try {
            nomadDownloadPath = await tools.downloadTool(nomadDownloadUrl, fileName);
        } catch (exception) {
            throw new Error(tasks.loc("NomadDownloadFailed", nomadDownloadUrl, exception));
        }

        let nomadUnzippedPath = await tools.extractZip(nomadDownloadPath);
        cachedToolPath = await tools.cacheDir(nomadUnzippedPath, nomadToolName, version);
    }

    let nomadPath = findNomadExecutable(cachedToolPath);
    if (!nomadPath) {
        throw new Error(tasks.loc("NomadNotFoundInFolder", cachedToolPath));
    }

    if (!isWindows) {
        fs.chmodSync(nomadPath, "777");
    }

    tasks.setVariable('NomadLocation', nomadPath);

    return nomadPath;
}

function getNomadDownloadUrl(version: string): string {
    let platform: string;
    let architecture: string;

    switch(os.type()) {
        case "Darwin":
            platform = "darwin";
            break;
        
        case "Linux":
            platform = "linux";
            break;
        
        case "Windows_NT":
            platform = "windows";
            break;
        
        default:
            throw new Error(tasks.loc("OperatingSystemNotSupported", os.type()));
    }

    switch(os.arch()) {
        case "x64":
            architecture = "amd64";
            break;
        
        case "x32":
            architecture = "386";
            break;
        
        default:
            throw new Error(tasks.loc("ArchitectureNotSupported", os.arch()));
    }

    return `https://releases.hashicorp.com/nomad/${version}/nomad_${version}_${platform}_${architecture}.zip`;
}

function findNomadExecutable(rootFolder: string): string {
    let nomadPath = path.join(rootFolder, nomadToolName + getExecutableExtension());
    var allPaths = tasks.find(rootFolder);
    var matchingResultFiles = tasks.match(allPaths, nomadPath, rootFolder);
    return matchingResultFiles[0];
}

function getExecutableExtension(): string {
    if (isWindows) {
        return ".exe";
    }

    return "";

}
