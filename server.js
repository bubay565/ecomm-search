const express = require('express')
const app = express()
const request = require('request')

app.get('/api/data', (req,res) => {
        res.send(require('./payload.JSON'))
})

app.listen(8081, () => console.log('backend service running🤓'))

