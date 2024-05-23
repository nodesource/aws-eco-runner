import core from "@actions/core";
import { start, stop } from "./lib/ec2Handler.js";

async function run() {
  try {
    const instances_id = JSON.parse(core.getInput('instances_id', {required: true}))
    const action = (core.getInput('action', {required: true})).toLowerCase

    if (action === "start") {
      await start(instances_id);
      return
    }

    if (action === "stop") {
      await stop(instances_id);
      return
    }


  } catch (err) {
    core.setFailed(err);
  }
}
run();
