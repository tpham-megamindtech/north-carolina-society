#!/usr/bin/env bash
# Reads Unsplash photo IDs (one per line) on stdin.
# Prints "OK <id>" for HTTP 200, "FAIL <code> <id>" otherwise.
while IFS= read -r id; do
  [ -z "$id" ] && continue
  code=$(curl -s -o /dev/null -w "%{http_code}" -I --max-time 12 "https://images.unsplash.com/photo-$id?q=80&w=400")
  if [ "$code" = "200" ]; then
    echo "OK $id"
  else
    echo "FAIL $code $id"
  fi
done
