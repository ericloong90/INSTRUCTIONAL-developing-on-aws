# Package folder directly and upload Lambda function to Lambda service
zip -r lambda.zip . && \
aws lambda update-function-code --function-name test-function --zip-file fileb://lambda.zip