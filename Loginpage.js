function login(){
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (uname=="admin" & pass=="123"){
        location.assign("file:///E:/Project/Classes.html");
        window.alert("Login Successful")
    }
    else
    {
        window.alert("Login Failed")
    }
}
