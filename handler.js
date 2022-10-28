/* 
// handler.js file

'use strict';
const { SNS } = require('aws-sdk');
//aws connection
const aws= require('aws-sdk');
aws.config.update({region:'us-east-1'})


exports.publish = (event,context, callback) => {

  var sns = new aws.SNS();
  
  const params = {
    Message: event.body.message,
    TopicArn: event.body.topicArn
  };

  sns.publish(params, (err, data) => {
    if (err) {
      console.log("Error",err);
      callback(err,null);

    } else {
      console.log("Success",data);
      callback(null, data);

    }
  });

}

// sns subscribe lambda function
exports.subscribe=(event,context,callback)=>{
  const sns=new SNS();
  const params = {
    Protocol: 'email',
    TopicArn: event.body.topicArn,
    Endpoint: event.body.email
  };

  sns.subscribe(params,(err,data)=>{
    if (err) {
      console.log("Error",err);
      callback(err,null);

    } else {
      console.log("Success",data);
      callback(null, data);

    }
  });

}


*/

/* 


service: serverlessandsns
frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs12.x

functions:
  publish:
    handler: handler.publish
    events:
       - http:
          path: /publish
          method: post
          cors: true

  subscribe:
    handler: handler.subscribe
    events:
       - http:
          path: /subscribe
          method: post
          cors: true

*/