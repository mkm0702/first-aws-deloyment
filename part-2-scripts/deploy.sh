#!/bin/bash

export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd first-aws-deloyment
git pull origin main

pm2 kill
pm2 start index.js
