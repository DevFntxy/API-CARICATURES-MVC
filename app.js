//Aqui va la configuracion del servidor
 import express from 'express'
 import morgan from 'morgan'
 import ejs from 'ejs'
 import caricaturesRoutes  from './src/routes/caricature.routes.js';
 const app = express (); // Para instanciar el servidor

 //Settings - configuracion
 app.set('port', process.env.PORT ||  3009); //Si el puerto no esta en las variables de entorno se le asigna un puerto libre
 app.set('view engine',ejs);

 //Middlewares -> Terminos para conectar las dos partes
 app.use(morgan('dev'));
 app.use(express.json());
 app.use(express.urlencoded({extended : true}))

 //Routes
 app.use('/sesniflix/caricatures', caricaturesRoutes)

 export default app;