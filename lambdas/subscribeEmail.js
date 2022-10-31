'use strict';
const Responses = require('./API_Resposes');
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' })


// sns subscribe lambda function
exports.handler = async event => {
    var SNS = new aws.SNS();
    const body = JSON.parse(event.body);

    if (!body || !body.topicArn || !body.email) {
        return Responses._error400({ message: `missing topicArn or Email` });
    }
    const params = {
        Protocol: 'email',
        TopicArn: body.topicArn,
        Endpoint: body.email
    };
    await SNS.subscribe(params, (err, data) => {
        if (err) {
            console.log("Error", err);
            return Responses._error400({ message: 'OOPs error occurred!!!!' });
        } else {
            console.log("Success", data);
            return Responses._Ok200({ message: `You have been subscribe to that email: ${body.email} ` });
        }
    }).promise();


}