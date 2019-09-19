import express from "express";
import bodyParser from "body-parser";
import submitHandler from "./sumbitHandler";

const PORT = 4001;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", submitHandler);

const handleListening = () => console.log('server run');
app.listen(PORT, handleListening);