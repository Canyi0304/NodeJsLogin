"use strict"; //이크마 스크립트

const output = {
    
    home: (request, response) => {
        response.render("home/index")
    },

    login: (request, response) => {
        response.render("home/login")
    }
}

const users = {
    id : ["canyi", "개발", "박팀장"],
    pw : ["1234", "1234", "12345"],
}

const process = {
    login : (request,response) =>
    {
        const id = request.body.id;
        const pw = request.body.pw;

        console.log(id, pw)

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return response.json({
                    success : true,
                    msg: "로그인에 성공했습니다."
                });
            }
        }
        return response.json({
            success : false,
            msg : "로그인에 실패하였습니다."
        });
    }
    
}

module.exports = {

    output,
    process,
    // home, login,

    /*
        위코드와 같다. object 의 key 와 value
        {
            key: valyue,
            home: home,
            login:login,
        }
    */
};