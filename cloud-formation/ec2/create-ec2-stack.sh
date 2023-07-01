SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

aws cloudformation create-stack --stack-name ec2-test-stack --template-body file://$SCRIPT_DIR/ec2-stack.yaml --region us-east-1
