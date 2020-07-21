const mongoose = require('mongoose')
const Test = require('../Models/Test')

module.exports = {
    index: (req, res) => {
        Test.find()
            .then(tests => res.json(tests))
            .catch(err => res.status(400).json("Error: " + err))
    },

    create: (req, res) => {
        const name = req.body.name
        
        const newTest = new Test({
            name
        })

        newTest.save()
            .then(() => res.status(200).json({message: "Test added!"}))
            .catch(err => res.status(400).json({error: err}))
    }
}