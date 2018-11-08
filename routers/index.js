let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.end('hello /');
});

module.exports = router;