import { EC2Client, StopInstancesCommand, StartInstancesCommand } from "@aws-sdk/client-ec2";
import core from "@actions/core";
import { sleep, consoleTable } from "./utils.js";


const client = new EC2Client();

export async function start(InstanceIds) {
try {
    const command = new StartInstancesCommand({InstanceIds: InstanceIds})
    let response
    response = await client.send(command);

    // TODO -Implement a loop to check the status of the instances until they are in the desired state
    // Suggest to not use describeInstanceStatus apisince it requires permission too open.
    // Wait for 5 seconds and send the request again to retrieve the status of the instances
    await sleep(5000);
    response = await client.send(command);
    consoleTable(response.StartingInstances)
    return response;
} catch (err) {
core.setFailed(err);
}
}

export async function stop(InstanceIds) {
  try{
  const command = new StopInstancesCommand({InstanceIds: InstanceIds})
  let response
  response = await client.send(command);
  // TODO -Implement a loop to check the status of the instances until they are in the desired state
  // Suggest to not use describeInstanceStatus API since it requires permission to open.
  // Wait for 5 seconds and send the request again to retrieve the status of the instances
  await sleep(5000);
  response = await client.send(command);
  consoleTable(response.StoppingInstances)
  return response;
  } catch (err) {
    core.setFailed(err);
  }
}
