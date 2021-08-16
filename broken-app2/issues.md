# Broken App Issues

Added (err) parameter to the catch

Added express.JSON to parse incoming json

Broke up function into smaller pieces:
-getRequests, which parses through incoming JSON to get the request
-fetchDev, which parses through what getRequests returns and fires off the request to github

Put in comments