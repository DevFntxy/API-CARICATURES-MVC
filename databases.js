import mongoose from "mongoose";

//Aqui va la conexion a la base de datos de Mongo DB 
mongoose.connect('mongodb+srv://dereksesni6:535n1@clusterdesesni.i93st.mongodb.net/caricatures_db?retryWrites=true&w=majority&appName=ClusterDeSesni')
.then((db)=>console.log('Mongodb atlas conected'))
.catch((error) =>console.error(error));
