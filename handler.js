/* 'use strict';

const Responses = require('./lambdas/API_Resposes');
const { SNS } = require('aws-sdk');
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' })


exports.publish = async (event) => {

  var SNS = new aws.SNS({ apiVersion: '2010-03-31' });

  const body = JSON.parse(event.body);

  if (!body || !body.topicArn || !body.message) {
    return Responses._error400({ message: `missing topicArn ${body.topicArn} or message from the body ${body.message} is ${body}`});
  }

  const params = {
    Message: body.message,
    TopicArn: body.topicArn
  };

  try {
    await SNS.publish(params).promise();
    return Responses._Ok200({ message: 'text has been sent' });
  } catch (error) {
    console.log('error', error);
    return Responses._error400({ message: 'text failed to send' });
  }

} */



/* // sns subscribe lambda function
exports.subscribe = (event, context, callback) => {
  const sns = new SNS();
  const params = {
    Protocol: 'email',
    TopicArn: event.body.topicArn,
    Endpoint: event.body.email
  };

  sns.subscribe(params, (err, data) => {
    if (err) {
      console.log("Error", err);
      callback(err, null);

    } else {
      console.log("Success", data);
      callback(null, data);

    }
  });

} */