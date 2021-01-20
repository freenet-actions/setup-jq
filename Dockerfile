FROM debian:9.5-slim

RUN apt-get update && apt-get install curl jq -y --no-install-recommends

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]