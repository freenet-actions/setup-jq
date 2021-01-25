# setup-jq
[![LICENSE](https://img.shields.io/github/license/md-actions/setup-jq)](https://github.com/ambientlight/md-actions/setup-ajq/blob/main/LICENSE)

Mit diesen Action kannst du einen Json-Parser ausführen und den Output ausgeben lassen.

## Eingabe
Ein `cmd` Befehl ist erforderlich, welches an den Parser weitergeleitet wird.

## Beispiel
```yaml
uses: md-actions/setup-jq@v1.0
with:
  cmd: jq -C '.' package.json
```
