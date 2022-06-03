import path from "path";
import mongoose from "mongoose";
import {CONNECT_MONGO_URL} from "../../config";
import {log} from "../utils/utils";

const connectSettings = {
  ssl: true,
  sslValidate: true,
  sslCA: path.resolve(`path`),
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    log(`Already connected mondogb`);

    return () => mongoose.connections[0].disconnect();
  }

  const mongo = await mongoose.connect(CONNECT_MONGO_URL);

  log(`Connect mongodb success`);

  return () => mongo.disconnect();
};

const connectDBWithoutCache = () => {
  return mongoose.connect(CONNECT_MONGO_URL);
};
