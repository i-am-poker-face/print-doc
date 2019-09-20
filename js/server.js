import express from "express";
import bodyParser from "body-parser";
import {submitHandler} from "./sumbitHandler";
import {createTableHandler} from "./db/handlers";
import routes from "./routes";
const PORT = 4000;
const app = express();

app.use(routes.staticAssets, express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(routes.submit, submitHandler);
app.get(routes.createTable, createTableHandler);

app.listen(PORT, () => console.log('server run'));