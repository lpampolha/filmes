const express = require('express')
const router = express.Router()
const {validationResult } = require('express-validator')
const Films = require('../models/films')

router.get('/', async (req, res) => {
    try {
        let film = await Films.find(req.query)
        res.status(200).json(film)
    }catch(error){
        res.status(422).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let film = await Films.findById(req.params.id)
        res.status(200).json(film)
    }catch(error){
        res.status(422).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        let  { name } = req.body

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } else {
            let films = new Films({name})
            await films.save()
            if (films.id) {
                res.json(films);
            }
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ "error": "Server Error" })
    }
})

module.exports = router