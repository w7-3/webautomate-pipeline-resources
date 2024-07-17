echo "Starting Builder Worker"

source $HOME/.zshrc

nvm use 16

export WEB_AUTOMATE_APP=builder
export WEB_AUTOMATE_ENV=dev
export WEB_AUTOMATE_SERVER_ID=francis.local
export WEB_AUTOMATE_WEBSITE=https://localhost:3000
export WEB_AUTOMATE_TIMEZONE=Europe/Zurich
export WEB_AUTOMATE_BUILD_ZONE=Dummy
export WEB_AUTOMATE_BUILD_NODE_ID=stage-POC

cd /Users/francis/work/webeagle-api/build/apps/builder

node dev.js
