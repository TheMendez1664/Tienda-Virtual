const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
})

router.get('/:id', async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
})
router.post('/', async (req, res) => {
    const newUser = await userService.createUser(req.body);
    if (newUser)
        res.status(201).json(newUser);
    else
        res.status(404).json({ message: 'User not registred' });
})
router.put('/:id', async (req, res) => {
    const updateUser = await userService.updateUser(
        req.params.id,req.body);
    if (updateUser)
        res.status(201).json(updateUser);
    else
        res.status(404).json({ message: 'User not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deletedUser = await userService.deleteUser(req.params.id);
    if(deletedUser){
        res.status(204).send();
    }
    else
    {
        res.status(404).json({message:'User dont delete'});
    }

})

module.exports = router;