const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    const text = fs
      .readFileSync(__dirname + '/text.txt')
      .toString()
      .replace(/\n/g, '<br />')
    var result = data.toString().replace(/foo/g, text)
    fs.writeFile(__dirname + '/created.html', result, 'utf8', function (err) {
      if (err) return console.log(err)
      res.sendFile(__dirname + '/created.html')
    })
  })
})

app.listen(3000)
