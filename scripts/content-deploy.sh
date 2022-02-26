region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region

set -x

BUCKET=$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-content-bucket'].Value" --output text)

npm run build -- --mode=development

aws s3 sync build "s3://${BUCKET}" --exclude index.html --delete
aws s3 cp build "s3://${BUCKET}" --recursive --exclude "*" --include "index.html" --cache-control 'max-age=0' 