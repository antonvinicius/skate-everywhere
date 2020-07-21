const mongoose = require('mongoose')
const User = require('../Models/User')


module.exports = {
    getAll: (req, res) => {
        User.find()
            .then(users => res.json({users}))
            .catch(err => res.status(400).json({error: err}))
    },

    update: (req, res) => {
        const username = req.params.username

        User.findOne({username: username}, (err, user) => {
            if (err) throw err
            user.update({ 
                $set: req.body
            })
                .then(res.json({message: `user ${username} Updated!`}))
                .catch(err => res.status(400).json({error: err}))
        })
    },

    register: (req, res) => {
        const name = req.body.name
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        const newUser = new User({
            name,
            username,
            email,
            password,
        })

        newUser.save()
            .then(() => res.status(200).json({ message: "User registered!" }))
            .catch(err => res.status(400).json({error: err}))
    },

    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password

        User.findOne({username: username}, (err, user) => {
            if (err) throw err

            user.comparePassword(password, (err, isMatch) => {
                if (err) throw err
                res.json({isMatch: isMatch})
            })
        })
    }
}