import {db} from "./connection";

export const createTableHandler = (req,res)=> {
    let sql = "create TABLE  mainData(id int(5) NOT NULL AUTO_INCREMENT, certificateId varchar(50) NOT NULL, data text NOT NULL, PRIMARY KEY (id))";

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table created')
    })
};

export const getDataHandler = (req, res)=>{
    let sql = "select * from mainData";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('fromdb', {
            dataFromDb: result
        });
    });
};

export const getDataById = (req, res)=>{
    let id = req.body.id;
    let sql = "select * from mainData where id= ? ";
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result[0]);
    });

};