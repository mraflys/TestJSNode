const models = require("../models/index");
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Email
  // console.log(req.body.email);
  models.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    console.log(user);
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};
module.exports = verifySignUp;