# Nomad Extension for Azure DevOps

## Overview:

This repo contains the Azure DevOps Pipeline tasks for installing Nomad and running Nomad commands in a build or release pipeline. The goal of this extension is to guide the user in the process to deploy application inside a Nomad cluster.

This extension contains the following contributions:
- Nomad tool installer - for installing Nomad if not installed on the build agent
- Nomad - for executing the core Nomad commands
- Nomad service connection - for creating a service connection to a Nomad cluster

The tasks are capable of running on the following build agent operating systems: 
- Windows
- MacOS
- Linux

For more detailed information about the tasks, see the README for each from the below links:

- [Nomad tool installer](/Tasks/NomadInstaller/README.md)
- [Nomad](/Tasks/NomadTask/NomadTaskV1/README.md)