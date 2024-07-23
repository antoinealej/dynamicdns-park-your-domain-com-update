# dynamicdns park your domain com update
## Run
```bash
DOMAIN=example.com HOST=test PASSWORD=xxx yarn update
```
## Install
```bash
yarn install
```
## Cron installation
```bash
crontab -e

# Runs every hour
0 * * * * DOMAIN=example.com HOST=test PASSWORD=xxx /aboslute/path/to/node /aboslute/path/to/project/update.js
```

## Find out paths
```bash
# Find out node path
which node

#Find out project path
pwd
```