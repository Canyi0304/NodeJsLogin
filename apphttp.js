const http = require("http");
const app = http.createServer((request, response)=>{
    response.writeHead(200,{"content-type": "text/html; charset=utf-8"});
    if (request.url == "/"){
        response.end("여기는 루트입니다.");
    }
    else if(request.url == "/login"){
        response.end("여기는 로그인입니다.");
    }
    //console.log(request.url);
});

app.listen(3001,()=>{
    console.log("http로 가동한 서버입니다.")
})
