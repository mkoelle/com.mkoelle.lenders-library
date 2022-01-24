#!/usr/bin/env bash
set +x #xtrace
set +v #verbose
set -e #errexit
set -u #nounset

region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region


# export AWS_SECRET_ACCESS_KEY= 
# export AWS_ACCESS_KEY_ID=  

set -x

HOSTEDZONE_ID=$(aws ssm get-parameter --name com-mkoelle-domains-hosted-zone-id --query "Parameter.Value" --output text)
ROOT_DOMAIN=$(aws ssm get-parameter --name com-mkoelle-domains-hosted-zone-name --query "Parameter.Value" --output text)

aws cloudformation deploy \
  --region ${region} \
  --template-file infra/cfn/infra.yml \
  --stack-name com-mkoelle-ll \
  --parameter-overrides \
      GivenDomain=ll.${ROOT_DOMAIN%?} \
      HostedZoneId=${HOSTEDZONE_ID} \
  --tags \
      Owner=mkoelle \
      Project=com.mkoelle.lenders-library \
      Code=com.mkoelle.lenders-library
