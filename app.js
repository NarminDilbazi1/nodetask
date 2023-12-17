const fs = require('fs');
const express = require('express');
const app = express();
fs.readFile('./data.json', 'utf8', (err,data)=>{
    if(!err){
      
app.get('/user', function (req, res) {
    res.send(data);
  });
    }else{
        res.status(500).send("Error ")
    }

})

app.listen(7001, () => {
    console.log('Example app listening on port 3000!');
  });