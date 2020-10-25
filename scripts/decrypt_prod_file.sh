#!/bin/sh

# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$1" --output src/environments/environment.prod.ts src/environments/environment.prod.ts.gpg