# setup-jq
[![LICENSE](https://img.shields.io/github/license/md-actions/setup-jq)](https://github.com/md-actions/setup-jq/blob/main/LICENSE)

This action sets up the jq tool. It downloads jq binaries from https://github.com/stedolan/jq/releases and adds path to PATH

   
# Usage
## Set up default jq version (1.6)
```yaml
- uses: md-actions/setup-jq@v1.0.0
```
## Set up specific jq version
```yaml
- uses: md-actions/setup-jq@v1.0.0
  with:
    version: 1.5
```
