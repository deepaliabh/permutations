const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 3000;
const {permutations} = require('./permutations');
app.use(body_parser.json());
app.get('/',(req,res) => {
    res.send("Hello from generator");
});
app.post("/permutations", (req, res) => {
    const inputArr = req.body.numArr;
    console.log('This is the input Array: ', inputArr);
    const data = permutations(inputArr);
    res.json(data);
 });

app.listen(port,()=>{console.log(`Listening on port ${port}`)});