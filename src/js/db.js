import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017");

export const  db = mongoose.connection;

db.on('error', () => console.log("connection error"));
db.on('open', () => console.log("connection succeeded"));