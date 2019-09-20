export const submitHandler = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};