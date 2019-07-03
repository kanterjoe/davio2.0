const router = require("express").Router();
const db        = require('../../models');
const store     = require('./initializeServerStore');


router.route('/')
    .get((req,res,err) => res.json("Hit the get route"))
    .post((req,res,err) => {
        const {type, payload, idempotency_id} = req.body;
        const action = {type, payload, idempotency_id};
        store.dispatch(action);
        res.json(action)
    })

;




module.exports = router;