'use strict';
const Responses = require('./lambdas/API_Resposes');
const { SNS } = require('aws-sdk');
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' })


// sns subscribe lambda function
exports.handler = async (event, context, callback) => {
    const sns = new SNS();
    const params = {
      Protocol: 'email',
      TopicArn: event.body.topicArn,
      Endpoint: event.body.email
    };
  
    try {
        await SNS.subscribe(params).promise();
        return Responses._Ok200({ message: `You have been subscribe to that email: ${event.body.email} ` });
      } catch (error) {
        console.log('error', error);
        return Responses._error400({ message: 'OOPs error occurred!!!!' });
      }
    
  
  }