// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('todoapp');

  // Delete many
  // db.collection('todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // Delete one
  // db.collection('todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // Find one and delete
  // db.collection('todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').deleteMany({ name: 'Daniel' });
  db.collection('users').findOneAndDelete({ _id: new ObjectID('5aa35aa795dc33b91ac4e0f6') }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // client.close();
});
