//Aqui iran los procesos o consultas que necesita el controlador de la base de datos
import Caricatures from "../models/Caricatures.js";

const caricaturesDAO = {};

caricaturesDAO.insert = async(caricature) =>{
    return await Caricatures.create(caricature)
};

caricaturesDAO.updateOne = async (caricature , id_caricature) =>{
    return await Caricatures.findOneAndUpdate({id_caricature : id_caricature}, caricature)
} 

caricaturesDAO.delete = async (id_caricature) =>{
    return await Caricatures.findOneAndDelete({id_caricature:id_caricature})
}

caricaturesDAO.getOne = async (id_caricature) =>{
    return await Caricatures.findOne({id_caricature:id_caricature})
}

export default caricaturesDAO ;