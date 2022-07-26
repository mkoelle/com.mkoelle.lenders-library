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
DOMAIN=ll.$(aws ssm get-parameter --name com-mkoelle-domains-hosted-zone-name --query "Parameter.Value" --output text)
DOMAIN=${DOMAIN%?} # the %? after the variable removes the last char (a trailing '.')
DOMAIN_DASHED=${DOMAIN//[.]/-} # Replaces all instances of '.' with '-'

aws cloudformation deploy \
  --region ${region} \
  --template-file infra/cfn/infra_site.yml \
  --stack-name com-mkoelle-ll-site \
  --parameter-overrides \
      GivenDomain=${DOMAIN} \
      HostedZoneId=${HOSTEDZONE_ID} \
  --tags \
      Owner=mkoelle \
      Project=com.mkoelle.lenders-library \
      Code=com.mkoelle.lenders-library

# The Auth stack was seperated from the site
# as certain resources of the auth configuration
# can not be modified without destroying and 
# recreating them
aws cloudformation deploy \
  --region ${region} \
  --template-file infra/cfn/infra_auth.yml \
  --stack-name com-mkoelle-ll-auth \
  --parameter-overrides \
      GivenDomain=${DOMAIN} \
      GivenDomainDashed=${DOMAIN_DASHED} \
  --tags \
      Owner=mkoelle \
      Project=com.mkoelle.lenders-library \
      Code=com.mkoelle.lenders-library