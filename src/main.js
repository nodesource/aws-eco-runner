import core from "@actions/core";
import { start, stop } from "./lib/ec2Handler.js";

async function run() {
  try {
    const instancesId = JSON.parse(core.getInput("instances_id", { required: true }));
    const action = core.getInput("action", { required: true });

    if (action.toLowerCase() === "start") {
      await start(instancesId);
      return;
    }

    if (action.toLowerCase() === "stop") {
      await stop(instancesId);
      return;
    }

    core.setFailed("Invalid action. Please provide either 'start' or 'stop' as action");
  } catch (err) {
    core.setFailed(err);
  }
}
run();
