"use strict";


const id = document.querySelector("#id")
const pw = document.querySelector("#pw")
const loginBtn  = document.querySelector("button")


//console.log(id); defer

loginBtn.addEventListener("click", login);

function login() {
    // console.log("login클릭")
    const request  = { 
        id : id.value,
        pw : pw.value,
    };

    // console.log(request);
    // console.log(JSON.stringify(request));
    fetch("/login",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((response) => {
        if(response.success){
            location.href = "/"
        }
        else{
            alert(response.msg);
        }
      }
      )
      .catch((err) =>{
        console.error(new Error("로그인 중 에러 발생"))
      });
}

