const models = require("../models/index");
const config = require("../../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signin = (req, res) => {
    models.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({
        id: user.id,
        email: user.email,
        name: user.frist_name + " " + user.last_name,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};