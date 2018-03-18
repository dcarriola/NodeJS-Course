const moment = require('moment');
// Jan 1st 1970 00:00:00 am

// let date = new Date();
// console.log(date.getMonth());

let date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY HH:mm:ss'));

// 10:35 am
console.log(date.format('h:mm a'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);
