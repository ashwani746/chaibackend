require('dotenv').config()

const express = require('express') // syntex
const app = express()
const port = 4000      // virtual port near 65535 port some port are free 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('ashwanidotcom')
})

app.get('/login', (req, res)=> {
    res.send('<h1> please visit my gitgub account ashwani746</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})