const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) =>  res.send('hello Thai'))

app.listen(port, () => 
    console.log(`Server is listening on port: ${port}`)
)