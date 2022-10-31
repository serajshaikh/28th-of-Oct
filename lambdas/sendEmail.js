'use strict';

const Responses = require('./API_Resposes')
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' })


exports.handler = async (event) => {

  var SNS = new aws.SNS({ apiVersion: '2010-03-31' });

  const body = JSON.parse(event.body);

  if (!body || !body.topicArn|| !body.Id) {
    return Responses._error400({ message: `missing topicArn ${body.topicArn}` });
  }
  const ID=body.Id;
  const params = {
    Message: `Hi ${data[ID].name}, You are ${data[ID].age} years old, and Your email is ${data[ID].email}`,
    TopicArn: body.topicArn
  };

  if (ID === 1) {
    try {
      await SNS.publish(params).promise();
      return Responses._Ok200({ message: `Hi ${data[ID].name} ` });
    } catch (error) {
      console.log('error', error);
      return Responses._error400({ message: params.Message });
    }
  } else {
    data[ID].Status="You did'nt Subscribe your email with SNS Services";
    return Responses._Ok200(data[ID])

  }

}


const data = {
  1: { name: 'Sharukh khan', age: 25, job: 'Actor', email: "18cs086sera@ug.cusat.ac.in" },
  2: { name: 'Jhon Wick', age: 52, job: 'Teacher', email: "jhonwick@gmail.com"},
  3: { name: 'Aamir Khan', age: 23, job: 'Doctor', email: "aamirkhan@gmail.com"}
};
