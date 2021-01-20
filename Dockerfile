FROM debian:9.5-slim

RUN apk add --no-cache ca-certificates bash curl jq

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]