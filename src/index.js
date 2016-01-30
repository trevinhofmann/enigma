'use strict';

import path from 'path';
import express from 'express';

let app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

let server = app.listen(8080, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The enigma website is now being served at http://%s:%s', host, port);
});
