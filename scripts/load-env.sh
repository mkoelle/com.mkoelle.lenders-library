#!/usr/bin/env bash
set +x #xtrace
set +v #verbose

# Loads dynamic react parameters before build or start
app_key=$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-auth-userPool'].Value" --output text)
export REACT_APP_USER_POOL=${app_key:-'us-east-1_X5xXXXx6X'}
echo $REACT_APP_USER_POOL
client_id=$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-auth-clientId'].Value" --output text)
export REACT_APP_CLIENT_ID=${client_id:-'45xx55xxxxxxxxxx6xx444xxxx'}
echo $REACT_APP_CLIENT_ID