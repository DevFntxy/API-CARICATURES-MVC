//Aqui van todos los metodos que tendra caricatures
import { request, response } from "express"
import caricaturesDAO from "../dao/caricatures.dao.js"

const caricaturesController = {}

caricaturesController.insert=(request, response) =>{
    caricaturesDAO.insert(request.body)
    .then((result) =>{
        response.json({
            data:{
                message: "Caricature agregada con exito",
                id_caricature: result
            }
        })
    })
    .catch((error) => {
        response.json({
            data:{
                message: error.msg 
            }
        })
    })
}

caricaturesController.updateOne=(request, response) =>{
    caricaturesDAO.updateOne(request.body, request.params.id_caricature)
        .then((result) =>{
            response.json({
                data:{
                    message : "Caricature update succesfully : )",
                    result : result
                }
            })
        })
        .catch((error) =>{
            response.json({
                data:{
                    error:error
                }
            })
        })
}

caricaturesController.deleteOne=(request, response) =>{
    caricaturesDAO.delete(request.params.id_caricature)
    .then((result)=>{
        response.json({
            data:{
                message: "Delete Correcty :C",
                result: result
            }
        })
    })
    .catch((error) =>{
        response.json({
            data:{
                error:error
            }
        })
    })
}

caricaturesController.getOne=(request,response) =>{
    caricaturesDAO.getOne(request.params.id_caricature)
    .then((result) =>{
        response.json({
            data:{
                message : "Se encontro la caricatura",
                result: result 
            }
        })
    })
    .catch((error) =>{
        response.json({
            data:{
                error:error
            }
        })
    })
}

caricaturesController.getALL=(request, response) =>{
    caricaturesDAO.getALL()
    .then((result) =>{
        response.json({
            data:{
                message:"Todos las caricaturas : ",
                result: result
            }
        })
    })
    .catch((error) =>{
        response.json({
            data:{
                error:error
            }
        })
    })
}
export default  caricaturesController ;