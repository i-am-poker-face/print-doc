import express from "express";
import bodyParser from "body-parser";
import {submitHandler} from "./js/sumbitHandler";
import {createTableHandler, getDataHandler, getDataById} from "./js/db/handlers";
import routes from "./js/routes";
const PORT = 4000;
const app = express();

app.use(routes.staticAssets, express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

app.post(routes.submit, submitHandler);
app.get(routes.getDataById, getDataById);
app.get(routes.createTable, createTableHandler);
app.get(routes.getAllData, getDataHandler);


app.listen(PORT, () => console.log('server run'));