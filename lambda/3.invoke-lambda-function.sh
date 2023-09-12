# Invokes the lambda function

# Event: Asynchronous
# RequestResponse: (default) Synchronous
# DryRun: Not running but only checking permissiongs
aws lambda invoke \
		--function-name test-function:2 \
		output.txt

aws lambda invoke \
		--function-name test-function:STAGING \
		output.txt