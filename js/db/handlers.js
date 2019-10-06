import {db} from "./connection";

let data;

export const createTableHandler = (req,res)=> {
    let sql = "create TABLE  mainData(id int(5) NOT NULL AUTO_INCREMENT, certificateId varchar(50) NOT NULL, data text NOT NULL, PRIMARY KEY (id))";

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('table created')
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

export const getDataById = (req, res)=>{
    let id = req.query.id;
    console.log(data[id - 1]);
    res.render('edit',{
        data: data[id-1]//todo сделать через helper
    });
};