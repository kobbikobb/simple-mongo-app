SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

aws cloudformation create-stack --stack-name docdb-test-stack --template-body file://$SCRIPT_DIR/db-stack.yaml --region us-east-1
