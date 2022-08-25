var models = require('../models/index');
const fs = require("fs");
exports.produkInsert = async (req, res) => {
    try {
        
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        models.Produk.create({
            kode_produk: req.body.kode_produk,
            nama_produk: req.body.nama_produk,
            qty: req.body.nama_produk,
            image_produk: fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/" + req.file.filename
            ),
            name_file: req.file.originalname,
        }).then((produk) => {
            console.log(produk)
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp/" + image.name,
                image.data
            );
            return res.send(`File has been uploaded.`);
        });
      } catch (error) {
            console.log(error);
            return res.send(`Error when trying upload images: ${error}`);
      }
};
