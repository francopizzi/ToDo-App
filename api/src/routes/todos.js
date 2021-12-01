const { Router } = require('express');
const { Item }= require('../db');

const router = Router();

router.get('/' , async (req,res,next) => {
    try {
        const todos = await Item.findAll();
        res.send (todos);
    }
    catch (error) {
        next (error);
    }
}); 

router.get('/:id' , async (req,res,next) => {
    const {id} = req.params;
    try {
        const todos = await Item.findAll({
            where : {
                folderId: id,
            }
        });
        res.send (todos);
    }
    catch (error) {
        next (error);
    }
});

router.post('/' , async (req,res,next) => {
    const {
        id,
        content,
        status,
        id_folder,
    } = req.body;
    
    if (! (typeof id === 'number')) {
        try {
            const todo = await Item.create({
                content,
                status,
            });
            await todo.setFolder (id_folder);
            res.send (todo);
        }
        catch (error) {
            next (error);
        }
    }
    else {
        if (content){
            try {
                const todo =  await Item.update(
                    { content }, 
                    {
                    where: {
                      id
                    }
                  });
                const todos = await Item.findAll();
                res.send(todos);
            }
            catch (error) {
                next (error);
            }
        }
        else  {
            try {
                const todo =  await Item.update(
                    { status }, 
                    {
                    where: {
                      id
                    }
                  });
                res.send (todo);
            }
            catch (error) {
                next (error);
            }
        }
    }
}); 




module.exports = router;