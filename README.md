# AWS Eco Runner

Automate the management of your GitHub Actions runner on AWS to minimize costs

## Overview

**AWS Eco Runner** is a solution designed to optimize the cost of using GitHub Actions runners on AWS. By automating the activation and deactivation of the instance, it ensures that you only incur costs when necessary.
The runner is kept active every 2 days (to not be removed as a Github Runner) and turned off when not in use, providing a cost-effective approach to managing GitHub Actions workflows.

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
          instance_id: '["i-01", "i-02"]'
          action: 'start'
          aws_default_region: 'us-west-2'

        ...

      - name: Stop Runner
        uses: nodesource/aws-eco-runner@v1
        with:
          instance_id: '["i-01"]'
          action: 'stop'
          aws_default_region: 'us-west-2'
```

This action requires a minimal permission to start and stop the instance:
This is an example IAM policy, you must adapt it to yourt needs.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["ec2:StartInstances", "ec2:StopInstances"],
      "Resource": "arn:aws:ec2:*:*:instance/$INSTANCE_ID"
    }
  ]
}
```
