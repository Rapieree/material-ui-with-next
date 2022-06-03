import path from "path";
import mongoose from "mongoose";
import {CONNECT_MONGO_URL} from "../../config";
import {log, ServiceName} from "../utils/utils";

const MongodbLogMessage = {
  SUCCESS_CONNECTED: `connect mongodb success`,
  ALREADY_CONNECTED: `already connected mondogb`,
};

const connectSettings = {
  ssl: true,
  sslValidate: true,
  sslCA: path.resolve(`path`),
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    log(ServiceName.MONGODB, MongodbLogMessage.ALREADY_CONNECTED);

    return () => mongoose.connections[0].disconnect();
  }

  const mongo = await mongoose.connect(CONNECT_MONGO_URL);

  log(ServiceName.MONGODB, MongodbLogMessage.SUCCESS_CONNECTED);

  return () => mongo.disconnect();
};

const connectDBWithoutCache = () => {
  return mongoose.connect(CONNECT_MONGO_URL);
};

const addDocumentToDB = async (model) => {
  await connectDB();

  return model.save();
};

const findAllDocuments = async (model) => {
  await connectDB();

  return model.find({});
};

const findOneDocument = async (model, findOptions) => {
  await connectDB();

  return model.findOne(findOptions);
};

const findAndDeleteOneDocument = async (model, findOptions) => {
  await connectDB();

  const result = await model.deleteOne(findOptions);

  return Boolean(result);
};

export {
  connectDB,
  addDocumentToDB,
  findAllDocuments,
  findOneDocument,
  findAndDeleteOneDocument,
};
