const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Delete all records
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Get record removed
Todo.findOneAndRemove({ _id: '5aa72de47b23b2d2cf863bba' }).then((todo) => {
  console.log(todo);
});

// Get record by id and remove it
Todo.findByIdAndRemove('5aa72de47b23b2d2cf863bba').then((todo) => {
  console.log(todo);
});
