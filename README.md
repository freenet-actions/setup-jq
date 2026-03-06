# setup-jq
[![LICENSE](https://img.shields.io/github/license/freenet-actions/setup-jq)](https://github.com/freenet-actions/setup-jq/blob/main/LICENSE)

This action sets up the jq tool. It downloads jq binaries from https://github.com/stedolan/jq/releases and adds path to PATH.

If you're using GitHub-hosted runners in your workflow, you probably don't need this (see "Included Software" on https://github.com/actions/runner-images).
   
# Usage
## Set up default jq version (1.8.1)
```yaml
- uses: freenet-actions/setup-jq@v3
```
## Set up specific jq version
```yaml
- uses: freenet-actions/setup-jq@v3
  with:
    version: 1.8.1
```
