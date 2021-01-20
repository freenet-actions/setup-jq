
#!/bin/bash
set -e

echo "::set-output name=value::$(eval $INPUT_CMD)"