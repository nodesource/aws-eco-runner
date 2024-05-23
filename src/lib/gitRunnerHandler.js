import core from "@actions/core";
import github from "@actions/github"

export async function validateRunner({token, owner, repo}) {
    const octokit = github.getOctokit(token)
    const getRunners = await octokit.rest.actions.listSelfHostedRunnersForRepo({
      owner:owner,
      repo: repo,
    });
    // TODO - validate until the the runner is Online
}
