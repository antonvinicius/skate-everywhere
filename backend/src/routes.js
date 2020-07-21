const route = require('express').Router()

const testController = require('./controllers/TestController')
const userController = require('./controllers/UserController')

route.get('/test', testController.index)
route.post('/test', testController.create)

route.get('/user', userController.getAll)
route.post('/user/register', userController.register)
route.get('/user/login', userController.login)
route.put('/user/update/:username', userController.update)

module.exports = route