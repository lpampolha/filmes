const express = require('express')
const router = express.Router()

router.get('/', [],(req, res, next) => {
    res.send(`Sistema de Controle de Filmes`)
  })

module.exports = router