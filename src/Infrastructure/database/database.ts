import mongoose = require('mongoose');



async function conection() {
  try {
    await mongoose.connect(process.env.MONGO_CNN ||'mongodb://localhost:27017/linklist');
    mongoose.set('returnOriginal', false)

    console.log("MongoDB online")
  } catch (error) {
    console.log(error);
  }
}


export default conection;