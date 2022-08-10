const express = require("express");
const User = require("../model/user.model");

const router = express.Router();

router.post("", async (req, res)=>{
    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password:req.body.password
            
        });
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("", async (req, res)=>{
    try {
        const userData = await User.find().lean().exec();
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})



module.exports = router