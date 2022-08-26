var models = require('../models/index');
const fs = require("fs");
exports.produkInsert = async (req, res) => {
    try {
        
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        const uploadFileDomain = "127.0.0.1:5000";
        const filePath = "resources/static/assets/tmp";
        const { filename } = req.file;
        models.Produk.create({
            kode_produk: req.body.kode_produk,
            nama_produk: req.body.nama_produk,
            qty: req.body.nama_produk,
            image_produk_url: `${filePath}/${filename}`,
            name_file: req.file.originalname,
        }).then((produk) => {
            return res.json(
                {
                    "Status": "Sucsess",
                    "Sucsess": true,
                    "msg": "Produk Berhasil Di Input",
                    "produk": produk,
                }
            );
        });
      } catch (error) {
            console.log(error);
            return res.json(
                {
                    "Sucsess": false,
                    "msg": "Produk Gagal Di Input",
                }
            );
      }
};
exports.produkDelete = async (req, res) => {
    try {
        models.Produk.findByPk(req.params.id,{

        }).then((produk) => {
            if(produk){
                produk.destroy().then(function() {
                    return res.json(
                        {
                            "Status": "Sucsess",
                            "Sucsess": true,
                            "msg": "Produk Berhasil Di Hapus",
                        }
                    );
                });
            }
        });
      } catch (error) {
            console.log(error);
            return res.json(
                {
                    "Sucsess": false,
                    "msg": "Produk Gagal Di Hapus",
                }
            );
      }
};
exports.produkUpdate = async (req, res) => {
    try {
        
        const uploadFileDomain = "127.0.0.1:5000";
        const filePath = "resources/static/assets/tmp";
        
        models.Produk.findByPk(req.params.id,{

        }).then((produk) => {
            if(produk){
                if (req.file == undefined) {
                    
                    var file_url = produk.image_produk_url;
                    var name_file = produk.name_file;
                }else{
                    var { filename } = req.file;
                    var file_url = `${filePath}/${filename}`;
                    var name_file = req.file.originalname;
                }
                produk.update({
                    kode_produk: req.body.kode_produk,
                    nama_produk: req.body.nama_produk,
                    qty: req.body.nama_produk,
                    image_produk_url: file_url,
                    name_file: name_file,
                }).then(function(user) {
                    return res.json(
                        {
                            "Status": "Sucsess",
                            "Sucsess": true,
                            "msg": "Produk Berhasil Di Update",
                            "produk": produk,
                        }
                    );
                });
            }

        });
      } catch (error) {
            console.log(error);
            return res.json(
                {
                    "Sucsess": false,
                    "msg": "Produk Gagal Di Update",
                }
            );
      }
};
exports.produkFull = async (req, res) => {
    try {
        models.User.findAll({}).then(function(produk) {
            return res.json(
                {
                    "Status": "Sucsess",
                    "Sucsess": true,
                    "produk": produk,
                }
            );
        });
      } catch (error) {
            console.log(error);
            return res.json(
                {
                    "Sucsess": false,
                    "msg": "Produk Gagal Di Lihat",
                }
            );
      }
};
exports.produkSingle = async (req, res) => {
    try {
        models.Produk.findByPk(req.params.id,{

        }).then((produk) => {
            if(produk){
                return res.json(
                    {
                        "Status": "Sucsess",
                        "Sucsess": true,
                        "msg": "Produk Tersedia",
                        "produk": produk,
                    }
                );
            }else{
                return res.json(
                    {
                        "Status": "Fail",
                        "Sucsess": true,
                        "msg": "Produk Tidak Tersedia",
                    }
                );
            }
        });
      } catch (error) {
            console.log(error);
            return res.json(
                {
                    "Sucsess": false,
                    "msg": "Error",
                }
            );
      }
};