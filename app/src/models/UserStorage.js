"use strict";


class UserStorage{
    static #users = {                      //#user 변수 은닉화
        id : ["canyi", "개발", "박팀장"],
        pw : ["1234", "1234", "12345"],
        name : ["cnayi1","canyi2","canyi3"]
    };

    static getUsers(...fields){                     //static 붙여야 은닉화된 user변수 반환가능
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{     //newUsers에는 fields 배열의 초기값이 들어가고 그 다음 변수들은 field에 들어감
            // console.log(newUsers,field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});

        return newUsers;

    }
}

module.exports = UserStorage;