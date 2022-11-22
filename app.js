"use strict";

//const { response } = require("express");
//const { request } = require("http");
//모듈
const express  = require("express");    //express 모듈 다운받기
const app = express();                 //app 변수에 express 실행

const PORT = 3000;

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/",home);  //use: 미들웨어를 등록해주는 함수

module.exports = app;



