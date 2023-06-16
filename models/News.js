import { Schema,model } from "mongoose";

const newsSchema = new Schema({
    title:String,
    text:{
        type:String,
        required:true,
    }
}, {timestamps:true }
)
export default model("News",newsSchema)