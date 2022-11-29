"use strict";

const id = document.querySelector("#id")
const pw = document.querySelector("#pw")
const loginBtn  = document.querySelector("button")


//console.log(id); defer

loginBtn.addEventListener("click", login);

function login() {
    // console.log("login클릭")
    const req  = { 
        id : id.value,
        pw : pw.value,
    };

    console.log(req);
}

