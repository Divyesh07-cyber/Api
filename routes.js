var express = require('express');
var router = express.Router();
var movie = require('./Model/Movies')



//api to fetch data
router.get('/movies',async(req,res)=>{
    const mi = await movie.find()
    res.send(mi)
})



//api to add data
router.post("/movies",async(req,res)=>{
    const mi = new movie({
        name:req.body.name,
        rating:req.body.rating,
        language:req.body.language
    })
    await mi.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



// api for updating
router.patch('/movies/:id',async (req,res)=>{
    const mi = await movies.findOne({_id:req.params.id})
    mi.name = req.body.name
    mi.rating = req.body.rating
    mi.language=req.body.language
    await mi.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



//delete api
router.delete("/movies/:name",async(req,res)=>{
    await movies.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })
})
module.exports = router
