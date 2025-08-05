const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , path = require('path')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + `/../build`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'))
})
// ================================== \\

app.listen(3001, _ => {
    console.log(`Go forth ever conquering but never winning 3001`)
})