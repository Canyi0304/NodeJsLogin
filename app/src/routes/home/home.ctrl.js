"use strict";    //이크마 스크립트

const home =
    (request, response) => {
        response.render("home/index")
    };

const login =
    (request, response) => {
        response.render("home/login")
    };

module.exports = {
    
    home,
    login,

    /*
        위코드와 같다. object 의 key 와 value
        {
            key: valyue,
            home: home,
            login:login,
        }
    */
};