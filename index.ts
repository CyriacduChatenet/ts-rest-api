import bodyParser from 'body-parser';
import express from 'express';
const swaggerJSDoc = require('swagger-jsdoc');

import { DBConnection } from './config/dbConfig';
import { getAllArtists, getAllCategories, getSingleArtist, getSingleCategory } from './controllers/get';
import { editArtist, editCategory } from './controllers/patch';
import { postNewArtist, postNewCategory } from './controllers/post';
import { deleteArtist, deleteCategory } from './controllers/delete';
import swaggerUi from 'swagger-ui-express';

const app = express();
DBConnection();
app.use(bodyParser.json());

const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Artists API',
        version: '1.0.0',
        },
    },
    apis: ['./index.ts', './doc/definition.yaml'],
};
const openapiSpecification = swaggerJSDoc(options);
app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.get('/api/v1/category', getAllCategories);
app.get('/api/v1/category/:id', getSingleCategory);

app.get('/api/v1/artist/', getAllArtists);
app.get('/api/v1/artist/:id', getSingleArtist);

app.post('/api/v1/category', postNewCategory);
app.post('/api/v1/artist', postNewArtist);

app.patch('/api/v1/category/:id', editCategory);
app.patch('/api/v1/artist/:id', editArtist);

app.delete('/api/v1/category/:id', deleteCategory);
app.delete('/api/v1/artist/:id', deleteArtist);

app.listen(3000, () => {
    console.log('server started on port 3000');
});