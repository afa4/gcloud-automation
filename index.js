'use strict';

exports.pubSub = (event, callback) => {
  console.log('Hello World!', event, callback);
  callback();
};
