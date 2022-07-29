#!/usr/bin/env bash
set +x #xtrace
set +v #verbose

# Loads dynamic react parameters before build or start
export REACT_APP_USER_POOL=${$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-auth-userPool'].Value" --output text):-'us-east-1_X5xXXXx6X'}
echo $REACT_APP_USER_POOL
export REACT_APP_CLIENT_ID=${$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-auth-clientId'].Value" --output text):-'45xx55xxxxxxxxxx6xx444xxxx'}
echo $REACT_APP_CLIENT_ID