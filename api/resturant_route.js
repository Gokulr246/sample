import express from "express"
import mongoose from "mongoose"

const router =express.Router()


const userSchema = mongoose.Schema({
    name:String
})

const Model =  mongoose.model("Users",userSchema)


router.route('/').get( async (req, res) => {

    const user = new Model({name:"new name"})

    const saved = await user.save()


    res.send({message:"success",data:saved})

})

export default router
