import express from "express";
import bodyParser from "body-parser";
import {submitHandler} from "./js/sumbitHandler";
import {createTableHandler, createCatalogTable, getDataHandler, getDataById, catalogFormRender, setCatalogFormToDb} from "./js/db/handlers";
import routes from "./js/routes";
const PORT = 4001;
const app = express();

app.use(routes.staticAssets, express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

app.post(routes.submit, submitHandler);
app.post(routes.setToCatalogForm, setCatalogFormToDb);

app.get(routes.getDataById, getDataById);
app.get(routes.getAllData, getDataHandler);
app.get(routes.setCatalog, catalogFormRender);


//создание таблиц
//todo потом удалить
app.get(routes.createTable, createTableHandler);
app.get(routes.createCatalogTable, createCatalogTable);


app.listen(PORT, () => console.log('server run'));