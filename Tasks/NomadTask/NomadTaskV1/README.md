# Nomad : Deploy application inside a Nomad cluster using the nomad command-line

## Overview

This task enables running Nomad commands as part of Azure Build and Release Pipelines. It supports the following Nomad commands
- init
- validate
- plan
- run
- stop
- status
- revert
- scale
- promote
- inspect

## Pre-requisites for the task


The only pre-requisite for the task is that Nomad must be installed on the Azure Pipelines build agent. If you want an exact version of Nomad on the agent then you can use the [Nomad tool installer task](/Tasks/NomadInstaller/README.md).


## Parameters of the task

- **Display name\*:** Provide a name to identify the task among others in your pipeline.


- **Command\*:** Select the nomad command to execute. Currently, the following commands are supported: 
	- init
  - validate
  - plan
  - run
  - stop
  - status
  - revert
  - scale
  - promote
  - inspect

- **Configuration directory\*:** Select the directory that contains all the relevant nomad (.hcl, .nomad) files. The task intends to use Nomad to deploy application on one cluster at a time.

- **Additional command arguments\*:** Provide any additional arguments for the selected command either as key-value pairs(-key=value) or as command line flags(-flag). Multiple options can also be provided delimited by spaces(-key1=value1 -key2=value2 -flag1 -flag2).