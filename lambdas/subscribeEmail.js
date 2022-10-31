'use strict';
const Responses = require('./API_Resposes');
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' })


// sns subscribe lambda function
exports.handler = async (event, context, callback) => {
var SNS = new aws.SNS({ apiVersion: '2010-03-31' });
    const body = JSON.parse(event.body);

    if (!body || !body.topicArn || !body.email) {
        return Responses._error400({ message: `missing topicArn or Email` });
    }
    const params = {
        Protocol: 'email',
        TopicArn: body.topicArn,
        Endpoint: body.email
    };
    console.log(params);
    try {
        await SNS.subscribe(params).promise();
        return Responses._Ok200({ message: `You have been subscribe to that email: ${body.email} ` });
    } catch (error) {
        console.log('error', error);
        return Responses._error400({ message: 'OOPs error occurred!!!!' });
    }


}