import core from "@actions/core";
import { start, stop } from "./lib/ec2Handler.js";

export async function run() {
  try {
    //console.log(await start(["i-03f65f60fa8de5492", "i-048cc57d9aba24d87"]));
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
