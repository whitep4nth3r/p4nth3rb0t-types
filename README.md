# p4nth3rb0t-types

![p4nth3rb0t-mainframe: My Twitch live streaming and community bot](https://p4nth3rblog-og-image.vercel.app/p4nth3rb0t-mainframe%3A%20My%20Twitch%20live%20streaming%20and%20community%20bot.png?theme=light&md=0&fontSize=80px&images=https%3A%2F%2Fp4nth3rlabs.netlify.app%2Fassets%2Fsvgs%2Fpanthers%2Fcool.svg)

This repository provides the types for [my Twitch bot](https://github.com/whitep4nth3r/p4nth3rb0t-mainframe) and [stream overlays](https://github.com/whitep4nth3r/p4nth3rlabs) written in TypeScript.

## Using this package in another repository

This repository can be sourced as a dependency directly from this repository in a package.json file.

When committing an update to this package, take the commit hash from the most up-to-date commit, and append it to the dependency declaration in package.json for p4nth3rb0t-mainframe and p4nth3rlabs.

### Fine the latest commit hash

```bash
git log -n1
```

### Append the commit hash to the dependency declaration in package.json

```json
"dependencies": {
    "p4nth3rb0t-types": "github:whitep4nth3r/p4nth3rb0t-types#{COMMIT_HASH}",
}
```
