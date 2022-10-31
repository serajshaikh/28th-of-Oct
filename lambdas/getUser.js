const Responses = require('./API_Resposes')



exports.handler = async event => {
  console.log('event', event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // not able to access if it is not an id or not a path parameter
    return Responses._error400({ message: 'missing the ID from the path' })
  }
  let ID = event.pathParameters.ID;
  if (data[ID]) {
    // return the data
    if (ID == 1) {

      /* const params = {
        Message: `Hi ${data[ID].name} Your Age is ${data[ID].age} and You are a ${data[ID].job} Your email is`,
        TopicArn: "arn:aws:sns:us-east-1:000718243366:test"
      };

      try {
        await SNS.publish(params).promise();
        return Responses._Ok200({ message: params.Message });
      } catch (error) {
        console.log('error', error);
        return Responses._error400({ message: 'text failed to send' });
      } */
      return Responses._Ok200(data[ID])
    }
    return Responses._Ok200(data[ID])
  }
  return Responses._error400({ message: 'no ID in data' })
  // failed as ID not in the data
}

const data = {
  1: { name: 'Sharukh khan', age: 25, job: 'journalist' },
  2: { name: 'Jhon Wick', age: 52, job: 'teacher' },
  3: { name: 'Aamir Khan', age: 23, job: 'plasterer' }
};



/* 

exports.publish = async event => {
  console.log('event', event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // not able to access if it is not an id or not a path parameter
    return Responses._error400({ message: 'missing the ID from the path' })
  }
  let ID = event.pathParameters.ID;
  if (data[ID]) {
    // return the data
    if (ID == 1) {
      const params = {
        Message: `Hi ${data[ID].name} Your Age is ${data[ID].age} and You are a ${data[ID].job} Your email is ${data[ID].email}`,
        TopicArn: "arn:aws:sns:us-east-1:000718243366:test"
      };

      try {
        await SNS.publish(params).promise();
        return Responses._Ok200({ message: params.Message });
      } catch (error) {
        console.log('error', error);
        return Responses._error400({ message: 'text failed to send' });
      }

    }
    return Responses._Ok200(data[ID])
  }
  return Responses._error400({ message: 'no ID in data' })
  // failed as ID not in the data
}

const data = {
  1: { name: 'Sharukh khan', age: 25, job: 'journalist', email:"18cs086sera@ug.cusat.ac.in" },
  2: { name: 'Jhon Wick', age: 52, job: 'teacher' },
  3: { name: 'Aamir Khan', age: 23, job: 'plasterer' }
};

*/