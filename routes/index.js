//*set up all routes for index of application

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router