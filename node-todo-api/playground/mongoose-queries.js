const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5aa6af8f639159cdc187952511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// // Query all without params or filter with param
// Todo.find({ _id: id }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // Return one at most
// Todo.findOne({ _id: id }).then((todo) => {
//   console.log('Todo', todo);
// });

// Just query by id
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((err) => console.log(err));

User.findById('5aa4a9f1bb3e3fc232ee9f23').then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => console.log(err));
