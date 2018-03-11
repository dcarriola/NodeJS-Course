// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('todoapp');

  // db.collection('todos').findOneAndUpdate({
  //   _id: new ObjectID('5aa48130c01078bedcff7826')
  // }, {
  //   $set: { completed: true }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5aa358a1e07114b8fb90d6a5')
  }, {
    $set: { name: 'Daniel' },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
