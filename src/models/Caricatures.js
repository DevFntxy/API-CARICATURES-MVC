//Tal cual el modelo o el esquema que se sigue para los documentos de caricatures
import { model, Schema, Types } from "mongoose";

const caricatureSchema = new Schema ({
    id_caricature:{
        require : true,
        unique : true,
        type: String
    },
    titule : String,
    description: String,
    category: String,
    season: Number
},{
    versionKey : false,
    timestamps: true
})


export default model ('caricature', caricatureSchema )