const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome Azure 190042129 ')
})

app.listen(8080, () => {
    console.log('server is listening on port 8080')
})

