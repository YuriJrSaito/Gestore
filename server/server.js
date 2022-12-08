import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';
//const routes = require('./routes');
import routes from './routes';

appModulePath.addPath(`${__dirname}`);

const Api = express();
const HTTP = http.Server(Api);

Api.use(cors());
Api.use(express.json());
Api.use(routes);

Api.get('/test', (req, res) => res.status(200).send('success!'));
Api.use(express.static(__dirname + '/public'));

HTTP.listen(3344, () => {
    console.log('listening on *:3344');
});
