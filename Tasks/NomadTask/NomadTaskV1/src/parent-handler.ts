import { BaseNomadCommandHandler } from './base-nomad-command-handler';
import { NomadCommandHandler } from './nomad-command-handler';
//import { TerraformCommandHandlerAWS } from './aws-terraform-command-handler';
//import { TerraformCommandHandlerGCP } from './gcp-terraform-command-handler';

export interface IParentCommandHandler {
    execute(providerName: string, command: string): Promise<number>;
}

export class ParentCommandHandler implements IParentCommandHandler {
    public async execute(providerName: string, command: string): Promise<number> {
        // Create corresponding command handler according to provider name
        let provider: BaseNomadCommandHandler;

        // switch(providerName) {
        //     case "azurerm":
        //         provider = new TerraformCommandHandlerAzureRM();
        //         break;
            
        //     case "aws":
        //         provider = new TerraformCommandHandlerAWS();
        //         break;
            
        //     case "gcp":
        //         provider = new TerraformCommandHandlerGCP();
        //         break;
        // }
        provider = new NomadCommandHandler();
        // Run the corrresponding command according to command name
        return await provider[command]();
    }
}