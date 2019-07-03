const router = require("express").Router();
router.use(require('./_util/error_handler'));

router.get('/', (req,res,err) => {res.json(hello)})
router.use('/scene', require('./scene'))
router.use('/mirror', require('./mirror'))

module.exports = router;