"use strict";  //이크마 스크립트 표준 준수

const express  = require("express");  
const router  = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.home);        
router.get("/login", ctrl.output.login); 
router.post("/login", ctrl.process.login);

module.exports = router;