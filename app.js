
//1.-Invocacion de librerias y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBUrl = require('./keys');
const TourController = require('./controllers/admin');

//2.-Configuración de conexion a base de datos
const app = express();
const port = 3000;
app.use(bodyParser.json());

//3.- Definicón de rutas
app.get('/', (req, res) => {
    res.send('Mongo Express.... Porfavor use /api/tours');
});
app.get('/api/tours', TourController.inq);
app.get('/api/tours/:id', TourController.inqId);
app.get('/api/tours/names/:name', TourController.inqByName);
app.post('/api/tours/', TourController.add);
app.delete('/api/tours/:id', TourController.delete);

//4.- Encender webserver y dbserver
app.listen(port, () => {
    console.log('Server Inicializado en el puerto: ' + port);
    mongoose.connect(MongoDBUrl.conn, { useNewUrlParser: true })
        .then(() => {
            console.log('Server mongodb Conectado...')
        }, err => { console.log(err) });

});

//metodo y url de la nueva api.
//app.get('/api/tours/:id',TourController.inqById);


//Patron de arquitectura MVC
// Con esto estamos levantando una aplicacion, 
//configuramos el web server
// Se debe iniciar donde esta el proyecto
// Modelo: abstraccion o representacion de la base de datos o en la coleccion. Imagen de la BD o coleccion
// El modelo debe tener los mismos campos/ formato /longitud que la BD
//Controlador: Logica
//App: Es el servidor, aquí estan todas la rutas, aqui se exponen todos los servicios