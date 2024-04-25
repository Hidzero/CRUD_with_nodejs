const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getById);
router.put('/:id/:userData', userController.updateUser); 
router.delete('/:id', userController.deleteUser); 

router.post('/login', userController.authUser)
router.post('/private', userController.privateUser)

module.exports = router;

