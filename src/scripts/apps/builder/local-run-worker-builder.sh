#!/bin/bash

LOCKFILE="/tmp/my_script.lock"

# Check if the lock file exists
if [ -e "${LOCKFILE}" ]; then
    echo "Script is already running."
    exit 1
fi

# Lock
trap 'rm -f "${LOCKFILE}"; exit $?' INT TERM EXIT
touch "${LOCKFILE}"

source $HOME/.zshrc

nvm use 16

echo "Starting Builder Worker"
export WEB_AUTOMATE_APP=builder
export WEB_AUTOMATE_ENV=dev
export WEB_AUTOMATE_SERVER_ID=francis.local
export WEB_AUTOMATE_WEBSITE=https://localhost:3000
export WEB_AUTOMATE_TIMEZONE=Europe/Zurich
export WEB_AUTOMATE_BUILD_NODE_ID=stage-POC

cd ~/work/webeagle-api/build/apps/builder

node dev.js

# Remove the lock file
rm -f "${LOCKFILE}"
trap - INT TERM EXIT

