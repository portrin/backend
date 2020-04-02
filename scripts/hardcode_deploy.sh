#!/bin/bash

set -xe

if [ $TRAVIS_BRANCH == 'staging' ] ; then
  ssh travis@$SSH_HOST "if mkdir backend;
  then git clone git@github.com:KookKook-Co/backend.git backend;
  else cd backend; git fetch --all; git reset --hard origin/staging; \
  fi; \
  cd backend && \
  npm install && \
  npm run build && \
  export PORT=5000 \
  npm run start:prod"


  git clone git@github.com:KookKook-Co/backend.git
  else
  cd backend
  git fetch --all
  git reset --hard origin/staging;
  fi 

  cd backend
  docker-compose up -d
  npm install
  npm run build
  export PORT=5000
  npm run start:prod
  
else
  echo "Not deploying, since this branch isn't master."
fi