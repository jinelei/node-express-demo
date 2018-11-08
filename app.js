let express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.end('hello /');
});

let server = app.listen(8000, () => {
    console.log(server.address());
    let host = server.address().address;
    let port = server.address().port;
    console.log(`start server: ${host}:${port}`);
});
