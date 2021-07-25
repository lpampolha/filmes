const express = require('express')
const router = express.Router()
const {validationResult } = require('express-validator')
const Users = require('../models/users')

router.get('/', async (req, res) => {
    try {
        let user = await Users.find(req.query)
        res.status(200).json(user)
    }catch(error){
        res.status(422).json(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let user = await Users.findById(req.params.id)
        res.status(200).json(user)
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
            let users = new Users({name})
            await users.save()
            if (users.id) {
                res.json(users);
            }
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ "error": "Server Error" })
    }
})

module.exports = router