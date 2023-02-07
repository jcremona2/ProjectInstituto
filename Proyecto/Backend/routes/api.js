var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 500,
                heigh: 500,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }

        } else {
            return {
                ...novedades,
                imagen: "https://res.cloudinary.com/dqedt8xuo/image/upload/v1675725543/Best-News-Apps-for-iPhone-and-iPad-2_q5dg3o.png"
            }
        }

    })

    res.json(novedades);
})

router.post('/contacto', async (req, res) => {
    console.log("hola",req.body)
    const mail = {
        to: 'jncremona@gmail.com',
        subject: 'Consulta al Instituto',
        html: `<h3><b>${req.body.nombre} ${req.body.apellido} </b> recidente de la ciudad de ${req.body.ciudad} <br> Se contactó a traves de la web y quiere mas información 
        a este correo ${req.body.email} <br> ademas hizo el siguiente comentario: <br><br> </h3>${req.body.mensaje} <br><br>`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SNMTP_HOST,
        port: process.env.SNMTP_PORT,
        auth: {
            user: process.env.SNMTP_USER,
            pass: process.env.SNMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: "Mensaje Enviado"
    });
})

module.exports = router;