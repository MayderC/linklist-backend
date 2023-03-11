import mongoose = require("mongoose");
import getEnvironment from "./../../Environments/index";

async function conection() {
  try {
    await mongoose.connect(
      getEnvironment.DB_STRING || "mongodb://localhost:27017/linklist"
    );
    mongoose.set("returnOriginal", false);

    console.log("MongoDB online");
  } catch (error) {
    console.log(error);
  }
}

export default conection;
