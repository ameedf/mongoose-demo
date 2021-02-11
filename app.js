const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mongoose-demo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect", err));

// schema
// model

const pcSchema = new Schema({
  configName: String,
  ram: Number
},
  {
    versionKey: false
  });

const userSchema = new Schema(
  // schema
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      min: 10,
      max: 120,
      default: 33
    }
  },
  // config
  {
    versionKey: false
  }
);

// { name: "ameed", age: 12 }
// PC: { configName (gamers/developers/students),
//        ram: 1,2,...
//  } // 3 records

const User = mongoose.model('User', userSchema);
const PC = mongoose.model('Pc', pcSchema);

const test = async () => {
  try {
    const deleteResult = await User.deleteMany({});
    console.log(deleteResult);

    const insertResult = await User.insertMany([
      { name: "user1", age: 10 },
      { name: "user2", age: 20 }
    ]);
    console.log(insertResult);

    const user3 = new User({ name: "user3", age: 30 });
    const user3SaveResult = await user3.save();
    console.log(user3SaveResult);

    const user4 = await User.create({ name: "user4" });
    console.log(user4);

    test2();
  } catch (err) {
    console.log(err);
  }
}

const test2 = async () => {
  try {
    // const user3 = await User.findOne({name: "user3"});
    // user3.age = 29;
    // const finalResult = await user3.save();
    // console.log(finalResult);

    // const user3 = await User.findOne({name: "user3"});
    // const finalResult = await user3.updateOne({age: 27});
    // console.log(finalResult);

    const user3 = await User.findOneAndUpdate({ name: "user3" }, { age: 25 });
    console.log(user3);
  } catch (err) {
    console.log(err);
  }
}

test();
