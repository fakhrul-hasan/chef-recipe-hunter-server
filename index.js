const express = require('express')
const chefsData = require('./data/chefsData.json')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Chef Recipe Hunter server is running');
})
app.get('/chefsData',(req,res)=>{
    res.send(chefsData);
})

app.listen(port,()=>{
    console.log(`Chef Recipe Hunter is running on ${port}`);
})