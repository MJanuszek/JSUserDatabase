usersData = [];

// --------------------------
// from HTML

let inputName = document.querySelector(".name");
let inputSurname = document.querySelector(".surname");
const submitBtn = document.querySelector(".submit");

// ----------------------------
let userName = "";
let userSurname = "";
let userId = 0;
// ----------------------------

const addUserName = function() {
    // extract id:
   // for(let i =0; i<usersData.length; i++){
        userId = usersData.length;
   // }
    // create new user object and add it to array:
    userName = inputName.value;
    userSurname = inputSurname.value;
    usersData.push({name:userName, surname: userSurname, id:userId })

};

// -------------------------------
const addNewUser = function() {
   addUserName();
   console.log(userName, userSurname)
   inputName.value = "";
   inputSurname.value = "";
};

submitBtn.addEventListener("click", addNewUser)
