# setup-jq
[![LICENSE](https://img.shields.io/github/license/freenet-actions/setup-jq)](https://github.com/freenet-actions/setup-jq/blob/main/LICENSE)

This action sets up the jq tool. It downloads jq binaries from https://github.com/stedolan/jq/releases and adds path to PATH

   
# Usage
## Set up default jq version (1.7)
```yaml
- uses: freenet-actions/setup-jq@v3
```
## Set up specific jq version
```yaml
- uses: freenet-actions/setup-jq@v3
  with:
    version: 1.7
```