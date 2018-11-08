let express = require('express');
let path = require('path');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.end('test /');
});

router.get('/test', (req, res, next) => {
    let filePath = path.resolve(__dirname, '../public/step.html');
    res.sendFile(filePath);
});


module.exports = router;