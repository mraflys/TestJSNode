const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/userController');
const produkController = require('../app/controllers/produkController');
const { verifySignUp } = require("../app/middleware");
const authcontroller = require("../app/controllers/authcontroller");
const { authJwt } = require("../app/middleware");
const upload = require("../app/middleware/upload");

//user
router.post('/api/registrasi/users',[
    verifySignUp.checkDuplicateUsernameOrEmail
], usersController.postSignup); 

router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
router.post("/api/auth/signin", authcontroller.signin);

router.get('/api/users/all',[
    authJwt.verifyToken
], usersController.getAllListUser); 

router.post('/api/insert/peroduk',[
    authJwt.verifyToken, upload.single("file")
], produkController.produkInsert); 
router.put('/api/update/peroduk/:id',[
    authJwt.verifyToken, upload.single("file")
], produkController.produkUpdate); 
router.delete('/api/delete/peroduk/:id',[
    authJwt.verifyToken
], produkController.produkDelete);
router.delete('/api/all/peroduk',[
    authJwt.verifyToken
], produkController.produkFull);

module.exports = router;