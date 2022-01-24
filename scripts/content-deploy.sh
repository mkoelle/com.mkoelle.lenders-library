region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region

set -x

bucket=$(aws cloudformation list-exports --query "Exports[?Name=='com-mkoelle-ll-content-bucket'].Value" --output text)

# npm run build -- --mode=development

# aws s3 sync dist s3://${bucket}
