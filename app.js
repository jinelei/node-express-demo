let express = require('express');
const app = express();

let indexRouter = require('./routers/index');
let testRouter = require('./routers/test');

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/test', testRouter);

let server = app.listen(8000, () => {
    console.log(server.address());
    let host = server.address().address;
    let port = server.address().port;
    console.log(`start server: ${host}:${port}`);
});
