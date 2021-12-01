const { Router } = require('express');

const { Folder , Item }= require('../db');

const router = Router();

router.delete ('/' , async (req,res,next) => {
    const {id} = req.body;
    try{
        const statusItem = await Item.destroy({
            where: {
                folderId:id
            },
        })
        const value = await Folder.destroy ({
            where: {
                id
            },
        })
        res.json(value)
    }
    catch (error) {
        next (error);
    }
});


router.get('/' , async (req,res,next) => {
    try {
        const todos = await Folder.findAll();
        res.send (todos);
    }
    catch (error) {
        next (error);
    }
}); 

router.post('/' , async (req,res,next) => {
    const {name} = req.body;
    if (! (typeof id === 'number')) {
        try {
            const todo = await Folder.create({
                name
            });
            return res.send (todo);
        }
        catch (error) {
            next (error);
        }
    }
    res.sendStatus(404);
}); 



module.exports = router;