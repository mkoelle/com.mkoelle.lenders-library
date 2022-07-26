#!/usr/bin/env bash
set +x #xtrace
set +v #verbose

# Loads dynamic react parameters before build or start
export REACT_APP_USER_POOL=$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-auth-userPool'].Value" --output text)
echo $REACT_APP_USER_POOL
export REACT_APP_CLIENT_ID=$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-auth-clientId'].Value" --output text)
echo $REACT_APP_CLIENT_ID
