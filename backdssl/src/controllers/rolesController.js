
const express = require('express');
const rolService = require('../services/rolService');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await rolService.getAllRoles();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await rolService.getRolById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Rol not found' });
  }
});

router.post('/', async (req, res) => {
  const newUser = await rolService.createRol(req.body);
  res.status(201).json(newUser);
});

router.put('/:id', async (req, res) => {
  const updatedUser = await rolService.updateRol(req.params.id, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'Rol not found' });
  }
});

router.delete('/:id', async (req, res) => {
  const deleted = await rolService.deleteRol(req.params.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Rol not found' });
  }
});

router.get('/users/:rolId', async (req, res) => {
  try {
    const result = await rolService.getUsersByRole(
      req.params.rolId
    )
    res.json(result);
  } catch (error) {
    if (error.message === 'Rol not found') {
      res.status(404).json({ error: error.message })
    }
    else{
      res.status(500).json({ error: error.message })
    }
  }
})


module.exports = router;