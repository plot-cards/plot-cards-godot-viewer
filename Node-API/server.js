const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/godot-export'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/godot-export/Plot-cards-godot-viewer.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})