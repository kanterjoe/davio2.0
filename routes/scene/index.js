const router = require("express").Router();
const db        = require('../../models');
router.route('/')
    .get((req,res,err) => db.Scene.findAll({ include: [db.Action] })
        .then(scenes => res.json(scenes))
        .catch(err)
    )
    .post((req,res,err) => db.Scene.create(req.body)
        .then(result => res.json(result))
        .catch(err)
    )

;




module.exports = router;