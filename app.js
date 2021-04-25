const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017//fruitsDB", { useNewUrlParser: true });


const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "John",
  age: 37
});

person.save();

const insertDocuments = function(db, callback) {

  //Get the documents collection
  const collection = db.collection('fruits');
  //Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
  ], function (err, result){
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents intothe collection");
    callback(result);
  });
}

  const findDocuments = function (db, callback) {
    //Get the documents collection
    const collection = db_collection ("documents");
    //Find some documents
    collection.find({}).toArray(function(err,docs){
      assert.equal(err,null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }