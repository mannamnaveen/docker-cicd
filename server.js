const express = require('express')
const app = express()
const port = 3000
let version = 1

app.get('/', (req, res) => {
  res.send(`This is the version ${version} for CICD.`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
