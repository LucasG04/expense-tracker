#!/bin/sh

# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$1" --output src/environments/firebase_config.ts src/environments/firebase_config.ts.gpg