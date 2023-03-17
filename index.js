import app from "./server.js"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"


const port = process.env.PORT || 8000

mongoose.connect(process.env.RESTREVIEW_DB_URI)
.then(()=>{
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
    console.log("DB connected...");
})
.catch((err)=>{
    console.log(err.message);
})






