const express = require("express")
const port = process.env.port || 3395
const Datastore = require ("nedb")
const mongoose = require ("mongoose")
const app = express()
const cors = require("cors")
app.use(express. static("public"))
app.use(express.json())
//const database = new Datastore("database.db")
const ONLINE_DB="mongodb+srv://chinonso:chinonso@cluster0.1tynp.mongodb.net/company?retryWrites=true&w=majority"

mongoose.connect(ONLINE_DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("database is active")
})
app.use(cors())
app.use("/",require("./component/controller"))
app.listen(port,()=>{
    console.log("app is listening")
})
//app.post("/api", (request, response)=>{
  //  console.log("data is active")
//})
//console.log(request.body)
//const data = request.body
//database.push(data)
//console.log(database)
//response.json()