const express = require('express')
const app = express()
const port = 8080

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.listen(port)

app.post('/', (req, res) => {
    console.log(`Receiving: ${JSON.stringify(req.body)}`)
    res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
})

console.log(`Running at port ${port}`)