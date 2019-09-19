import db from "./db";
import mongoose from "mongoose";
import verificationSchema from "./schema";

const Verification = mongoose.model("Verification", verificationSchema);

const submitHandler = (req, res) => {
        var data = new Verification(req.body);
        data.save()
            .then(item => {
                res.send("Сохранено");
            })
            .catch(err => {
                res.send('Проблемы при запросе в базу');
            });

        db.collection('verification').insertOne(data, function(err, collection){
            if (err) throw err;
            console.log("Сохранено");
        });

        return res.redirect('index.html');
};

export default submitHandler;