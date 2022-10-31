'use strict';

const Responses = require('./API_Resposes')
const { SNS } = require('aws-sdk');
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' })


exports.handler = async (event) => {

  var SNS = new aws.SNS({ apiVersion: '2010-03-31' });

  const body = JSON.parse(event.body);

  if (!body || !body.topicArn || !body.message ||!body.Id) {
    return Responses._error400({ message: `missing topicArn ${body.topicArn} or message from the body ${body.message} is ${body}`});
  }

  const params = {
    ID: body.Id,
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

}