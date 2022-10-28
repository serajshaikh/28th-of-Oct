const Responses=require('./API_Resposes')
const { SNS } = require('aws-sdk');
//aws connection
const aws= require('aws-sdk');
aws.config.update({region:'us-east-1'})

// sns publish lambda function
const publish = (event) => {

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
/*   const subscribe=(event)=>{
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
  
  } */

exports.handler=async event=>{
    console.log('event', event);

    if(!event.pathParameters||!event.pathParameters.ID){
        // not able to access if it is not an id or not a path parameter
        return Responses._error400({message:'missing the ID from the path'})
    }
    let ID=event.pathParameters.ID;
    if(data[ID]){
        // return the data
        if(ID==1){
            const edata ={"body":{"message":"Hello Seraj, You are learning SNS","topicArn":"arn:aws:sns:us-east-1:000718243366:snsTest"}}
             publish(edata)
             return Responses._Ok200(data[ID])
     
         }
        return Responses._Ok200(data[ID])
    } 
    return Responses._error400({message:'no ID in data'})
    // failed as ID not in the data
}

const data={
    1:{name:'Sharukh khan', age:25, job:'journalist'},
    2:{name:'Jhon Wick', age:52, job:'teacher'},
    3:{name:'Aamir Khan', age:23, job:'plasterer'}
};