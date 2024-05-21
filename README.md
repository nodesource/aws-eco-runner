# AWS Eco Runner

Automate the management of your GitHub Actions runner on AWS to minimize costs

## Overview

**AWS Eco Runner** is a solution designed to optimize the cost of using GitHub Actions runners on AWS. By automating the activation and deactivation of the instance, it ensures that you only incur costs when necessary.
The runner is kept active every 2 days (to not be removed as a Github Runner) and turned off when not in use, providing a cost-effective approach to managing GitHub Actions workflows.

## Installation

TODO

## Usage

```yaml
    steps:
      # Configure AWS Credentials
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: us-west-2
          role-to-assume: $ARN_IAM_ROLE

      - name: Start Runner
        uses: nodesource/aws-eco-runner@v1
        with:
          instance_id: $INSTANCE_ID
          action: 'start'
          aws_default_region: 'us-west-2'

        ...

      - name: Stop Runner
        uses: nodesource/aws-eco-runner@v1
        with:
          instance_id: $INSTANCE_ID
          action: 'stop'
          aws_default_region: 'us-west-2'
```
