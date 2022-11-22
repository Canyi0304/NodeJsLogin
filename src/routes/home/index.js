"use strict";  //이크마 스크립트 표준 준수

const express  = require("express");  
const router  = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.home);        
router.get("/login", ctrl.login);

module.exports = router;