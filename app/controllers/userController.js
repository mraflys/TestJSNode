var models = require('../models/index');
var bcrypt = require("bcryptjs");
exports.postSignup = async (req, res) => {
    try {
        var modUser = models.User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            frist_name: req.body.frist_name,
            last_name: req.body.last_name,
        }).then(function(user) {
            
            res.json(
                {
                    "Status": "Sucsess",
                    "Sucsess": true,
                    "msg": "user berhasil di buat",
                    "user": user,
                }
            );
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.getAllListUser = async (req, res) => {
    try {
        models.User.findAll({}).then(function(user) {
            res.json(user);
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};
