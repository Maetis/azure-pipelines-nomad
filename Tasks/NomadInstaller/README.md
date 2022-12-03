# Nomad tool installer


### Overview

The Nomad Tool Installer task acquires a specified version of [Nomad](https://www.nomadproject.io/) from the Internet or the tools cache and prepends it to the PATH of the Azure Pipelines Agent (hosted or private). Use this task to change the version of Nomad used in subsequent tasks like [Nomad](/Tasks/NomadTask/NomadTaskV1/README.md).
Adding this task before the [Nomad task](/Tasks/NomadTask) in a build definition ensures you are using that task with the right Nomad version.

### Pre-requisites for the task

The task can run on the following build agent operating systems:
- Windows
- MacOS
- Linux

### Parameters of the task

* **Display name\*:** Provide a name to identify the task among others in your pipeline.

* **Version\*:** Specify the keyword 'latest' to get the latest released version or specify exact version of Teraform to install.  
Example: 
    To install latest Nomad version use keyword: latest. To install specific version Ex. 1.4.3, use 1.4.3.
For getting more details about exact version, refer [this link](https://releases.hashicorp.com/nomad/)


### Output Variables

* **Nomad location:** This variable can be used to refer to the location of the Nomad binary that was installed on the agent in subsequent tasks.
