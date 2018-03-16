const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
  {
    _id: userOneId,
    email: 'daniel@example.com',
    password: 'userOnePass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({ _id: userOneId, access: 'auth' }, process.env.JWT_SECRET).toString()
    }]
  },
  {
    _id: userTwoId,
    email: 'jen@example.com',
    password: 'userTwoPass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({ _id: userTwoId, access: 'auth' }, process.env.JWT_SECRET).toString()
    }]
  }
];

const todos = [
  {
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
]; // seed data

const populateTodos = (done) => {
  Todo.remove({}).then(() => { // delete all
    return Todo.insertMany(todos); // add 2 todos
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let user1 = new User(users[0]).save();
    let user2 = new User(users[1]).save();

    return Promise.all([user1, user2]);
  }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
