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
- Connect to the test ec2 instance

## WORKED!!!

mongodb://testadmin:testadmin@docdb-2023-06-25-17-31-52.cluster-cuttwdlndsr6.us-east-1.docdb.amazonaws.com:27017/?tls=true&readPreference=secondaryPreferred&retryWrites=false

