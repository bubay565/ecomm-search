const express = require('express')
const app = express()
const port = process.env.PORT || 8081;

app.get('/api/data', (req, res) => {
  const fs = require('fs');
  let dataObj;
  fs.readFile('./payload.JSON', 'utf8', (err, data) => {
    if (err) {
       res.send(JSON.parse(err));
    }
    dataObj = JSON.parse(data);
    res.send(dataObj)
  });
});
  
app.listen(port, () => console.log('backend service running🤓')) 

