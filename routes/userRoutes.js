const controller = require('../controllers/userController'); 
const router = require('express').Router(); 

// Crud routes / users

router.get('/', controller.getUsers); // /users
router.get('/:userId', controller.getUser); // /:userId
router.post('/', controller.createUser);  // /users
router.put("/:userId", controller.updateUser); 
router.delete(':/userId', controller.deleteUser); 

module.exports = router; 