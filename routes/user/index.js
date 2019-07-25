const { Router } = require('express')
const { getAllUsers, createNewUser } = require('../../controllers/user')

const router = Router();
router.get('/users', getAllUsers)
router.post('/register', createNewUser)
module.exports = router