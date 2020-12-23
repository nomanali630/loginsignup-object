
var users = []


function signup() {
    let name1 = document.getElementById("name").value;
    let email2 = document.getElementById("email").value.toLowerCase();
    let password3 = document.getElementById("password").value;
    let gender4 = document.getElementById("gender").value;
    let national5 = document.getElementById("national").value;
     
    var getData = localStorage.getItem("usersData")
    
    
    if(getData === null){
        users = []
    }
    else{
        users = JSON.parse(getData);

    }
    
    var isready = false;

    for (i = 0; i < users.length; i++) {
        if (users[i].UserEmail === email2) {
            isready = true;
            break;
        }
    }

    if (isready) {
        alert("Email already exists")
    }
    else {
        users.push({
            UserName: name1,
            UserEmail: email2,
            UserPassword: password3,
            UserGender: gender4,
            UserNationality: national5,
        })

        // localStorage.setItem("usersData", users);
        localStorage.setItem("usersData", JSON.stringify(users));
        alert("Login successfully");
        window.location.href = "login.html";
    }
    console.log(users);



    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("age").value = "";

    return false;
}


let newUser = JSON.parse(localStorage.getItem("usersData"));


function login() {

    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upassword').value;
    isfound = false;

    for (i = 0; i < newUser.length; i++) {
        if (newUser[i].UserEmail === uemail) {
            isfound = i;
            localStorage.setItem("cIndex", isfound);
            break;
        }
    }
    if (isfound === false) {
        alert("Email not found")
    }
    else if (newUser[isfound].UserPassword === upassword) {
        // window.open("feed.html");
        alert("Login succesfully");

        window.location.href = "feed.html";
    }
    else {
        alert("password incorrect")
    }
    return false;

}

function showData() {
    var cIndex = JSON.parse(localStorage.getItem('cIndex'));
    document.getElementById("new").innerHTML = "Name : " + newUser[cIndex].UserName
    document.getElementById("new1").innerHTML = "Email : " + newUser[cIndex].UserEmail
    document.getElementById("new2").innerHTML = "Password : " + newUser[cIndex].UserPassword
    document.getElementById("new3").innerHTML = "Gender : " + newUser[cIndex].UserGender
    document.getElementById("new4").innerHTML = "Nationality : " + newUser[cIndex].UserNationality
}



