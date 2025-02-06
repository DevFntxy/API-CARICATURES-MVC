//Rutas para acceder a los distintos metodos para caricatures
import { Router } from "express";
import caricaturesController from "../controllers/caricatures.controller.js";

const router = Router()

router.post('/insert', caricaturesController.insert)
router.put('/update/:id_caricature', caricaturesController.updateOne)
router.delete('/delete/:id_caricature', caricaturesController.deleteOne)
router.get('/getOne/:id_caricature', caricaturesController.getOne)

export default router ;