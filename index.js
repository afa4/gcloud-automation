'use strict';

exports.pubSub = (event, context, callback) => {
  let input = Buffer.from(event.data, 'base64').toString('ascii');
  console.log('Hello World!', input);
  callback();
};
