import {db} from "./connection";

let data;

export const createTableHandler = (req,res)=> {
    let sql = "create TABLE  mainData(id int(5) NOT NULL AUTO_INCREMENT, certificateId varchar(50) NOT NULL, data text NOT NULL, PRIMARY KEY (id))";

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('table created')
    })
};

export const createCatalogTable = (req,res)=> {
    let sql = "create TABLE  catalog(id int(5) NOT NULL AUTO_INCREMENT, `group` varchar(50) NOT NULL, data text NOT NULL, PRIMARY KEY (id))  ENGINE=InnoDB   DEFAULT CHARSET=utf8";

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('catalog table created')
    })
};

export const getDataHandler = (req, res)=>{
    let sql = "select * from mainData";
    db.query(sql, (err, result) => {
        if (err) throw err;
        data = result;
        res.render('fromdbejs', {
            dataFromDb: result
        });
    });
};

export const catalogFormRender = (req, res)=>{
    res.render('setCatalogForm');
};

export const setCatalogFormToDb = (req, res) => {
    let sql = "insert into catalog(`group`, data) values (?,?)";

    console.log(req.body);
    let info = [req.body.group, req.body.data];

    db.query(sql, info, (err, result) => {
        if (err) throw err;
        res.send('данные вставлены в каталог');
    })
};

export const getDataById = (req, res)=>{
    let id = req.query.id;
    console.log(data[id - 1]);
    res.render('edit',{
        data: data[id-1]//todo сделать через helper
    });
};