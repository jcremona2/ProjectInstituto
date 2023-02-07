var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify((cloudinary.uploader.upload));
const destroy = util.promisify((cloudinary.uploader.destroy));

/* Obtener lista de Novedades */
router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {

            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });

});

router.get('/agregar', async function (req, res, next) {

    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
    });
});

/* Crear Novedad */
router.post('/agregar', async function (req, res, next) {
    try {
        // Subida de imagen
        var img_id = "";

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        // Fin subida de imagen

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedades({
                ...req.body,
                img_id
            });
            res.redirect("/admin/novedades")
        } else {
            res.render("admin/agregar", {
                layout: 'admin/layout',
                usuario: req.session.nombre,
                error: true,
                message: "todos los campos son obligatorios"

            })
        }
    } catch (error) {
        console.log(error)
        res.render("admin/agregar", {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            error: true,
            message: "Fallo la creacion de la novedad"
        })
    }
});

/* Eliminar Novedad */
router.get('/eliminar/:id', async function (req, res, next) {
    var id = req.params.id;
    let novedad = await novedadesModel.getNovedadesById(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id))
    }
    await novedadesModel.delNovedadesById(id);
    res.redirect("/admin/novedades")
});

/* Modificar Novedad mediante Id*/
router.get('/modificar/:id', async function (req, res, next) {
    var id = req.params.id;
    novedad = await novedadesModel.getNovedadesById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        obj: novedad
    });
});


router.post('/modificar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        // verificamos si hay que borar la imagen guardada en la plataforma cloud
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await
                    uploader(imagen.tempFilePath)
                ).public_id;
                borrar_img_vieja = true;
            }
        }
        // si existe una imagen y queremos borrarla llama a la api destroy
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original))
        }

        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        }
        console.log("fianl", obj)

        if (obj.titulo != "" && obj.subtitulo != "" && obj.cuerpo != "") {
            await novedadesModel.modNovedadesById(obj, id);
            res.redirect("/admin/novedades")
        } else {
            res.render("admin/agregar", {
                layout: 'admin/layout',
                usuario: req.session.nombre,
                error: true,
                message: "todos los campos son obligatorios"

            })
        }
    } catch (error) {
        console.log(error)
        res.render("admin/agregar", {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            error: true,
            message: "Fallo la moficacion de la novedad"
        })
    }
});

module.exports = router;