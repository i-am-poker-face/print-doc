import mongoose from "mongoose";

const verificationSchema = mongoose.Schema({
    number: String,
    lastNameName: String
});

export default verificationSchema;