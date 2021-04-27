
const mongoose= require ("mongoose")
const storeschema = mongoose.Schema({
    item:{
    type:"String",
    required:true,
    unique:true
    },

    price:{
        type:"string",
        required:true,
        unique:true

    }
})
module.exports=mongoose.model("stocks",storeschema)
