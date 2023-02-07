var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

router.get('/novedades', async function(req,res,next){
    let novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedades =>{
        if (novedades.img_id){
            const imagen = cloudinary.url(novedades.img_id,{
                width:500,
                heigh:500,
                crop:'fill'
            });
            return{
            ...novedades,
            imagen
            }

        }else{
            return{
                ...novedades,
                imagen:"https://res.cloudinary.com/dqedt8xuo/image/upload/v1675725543/Best-News-Apps-for-iPhone-and-iPad-2_q5dg3o.png"
            }
        }

    })

    res.json(novedades);
})

module.exports = router;