const { Router } = require('express')
const { getAllUsers, createNewUser, deleteUser } = require('../../controllers/user')

const router = Router();
router.get('/users', getAllUsers)
router.post('/register', createNewUser)
router.delete('/users/:id', deleteUser)
module.exports = router