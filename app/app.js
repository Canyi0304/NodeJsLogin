"use strict";

//const { response } = require("express");
//const { request } = require("http");
//모듈
const express  = require("express");    //express 모듈 다운받기
const app = express();                 //app 변수에 express 실행
const bodyParser = require("body-parser");  // request.body parse ,  npm install body-parser -s

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱 세팅 / 미들웨어
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({extended : true})); //URL을 통해 전달되는 데이터에 한글, 공백과 같은 문자가 포함되어 있을 경우 제대로 인식되지 않는 문제 해결


app.use("/",home);  //use: 미들웨어를 등록해주는 함수

module.exports = app;



