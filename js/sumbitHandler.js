import {db} from "./db/connection";

export const submitHandler = (req, res) => {
    let sql = "insert into mainData(certificateId, data) values (?,?)";

    let data = [req.body.number, JSON.stringify(req.body)];

    db.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log('данные вставлены');
        res.redirect('/assets/html/index.html');
    })
};