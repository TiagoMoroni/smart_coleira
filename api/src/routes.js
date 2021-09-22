const express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    return res.send("asdd")
})

module.exports = router