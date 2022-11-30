"use strict"; //이크마 스크립트

const UserStorage = require("../../models/UserStorage")

const output = {
    
    home: (request, response) => {
        response.render("home/index")
    },

    login: (request, response) => {
        response.render("home/login")
    }
}



const process = {
    login : (request,response) =>
    {
        const id = request.body.id;
        const pw = request.body.pw;

        //const userStorage = new UserStorage();
        //console.log(UserStorage.users);
        // console.log(UserStorage.getUsers("id","pw","name"));
        const users = UserStorage.getUsers("id","pw");

        //console.log(id, pw)
        const responseValue = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                
                responseValue.success = true;
                return response.json(responseValue);

            }
        }
        
        responseValue.success = false ;
        responseValue.msg = "로그인에 실패하였습니다.";
        return response.json(responseValue);
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