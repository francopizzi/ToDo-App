const { Router } = require('express');
const todosRouter = require('./todos.js');
const foldersRouter = require('./folders.js');

const router = Router();

router.use('/todos', todosRouter);
router.use('/folders', foldersRouter);


module.exports = router;
