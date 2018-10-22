watchman watch-del-all
# rm -rf node_modules && npm install --registry=https://registry.npm.taobao.org
# linux
rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache

# windows
rd/s/q D:\RN\AwesomeProject\node_modules && yarn cache clean && yarn install && yarn start -- --reset-cache
# rnpm link
# react-native link