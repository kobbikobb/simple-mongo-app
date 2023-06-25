# Simple Mongo App

Test connecting to MongoDb

## Instructions for connecting to mongo
- Make sure docker engine is running
  - For example: colima start
- ./start-mongo.sh
- npm run build
- npm run start

## Instructions for connecting to AWS DocumentDb
- Open terminal
  - export AWS_PROFILE=yourprofile
  - ./cloud-formation/create-stack.sh
- Connect to the test ECT instance via SSH
- Navigate into simple-mongo-app
- Download the Amazon DocumentDB Certificate Authority (CA) into the EC2 instance
- Run ./start with a valid connecting string

## The connecting string
In the cluster in the AWS console you will find something like this as a suggested connecting string.
  
mongodb://testadmin:<insertYourPassword>@docdb-test-cluster.cluster-cuttwdlndsr6.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=us-east-1-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false

Adjust it as follows:
mongodb://testadmin:test1234@docdb-test-cluster.cluster-cuttwdlndsr6.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=us-east-1-bundle.pem&readPreference=secondaryPreferred&retryWrites=false