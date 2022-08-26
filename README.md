# Kafka-Producer Server
Node-JS + Typescript server with an endpoint to publish to local kafka topics.

## Requirements
- A Kafka cluster running in localhost. (Recommended to have three brokers running on ports 9093, 9094, 9095.)
- Node v12+.

## Installation
Download and install packages with the following command.
```
npm i
```
Then run the server.
```
npm run start
```
Now you can post request localhost:4123/ with the topic and data you want to send.

## Optional
- I've provided the postman request collection if you need it.
