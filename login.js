
//intialise users and vars

if (localStorage.getItem("logged in") == null) {
    var loggedin = false;
    localStorage.setItem("logged in", loggedin);
} else {
    loggedin = JSON.parse(localStorage.getItem("logged in"))
}
if (localStorage.getItem("users") == null) {
    var users = [{ id: 1, username: "Admin", email: "admin@admin.com", password: "admin123", grades: { math: 0, physics: 0, english: 0 }, Fees: "", paidFees: "" }, { id: 2, username: "user", email: "user@user.com", password: "password", grades: { math: 0, physics: 0, english: 0 }, Fees: "0", paidFees: "0" }, { id: 3, username: "Omar Haitham", email: "omar.haitham@gmail.com", password: "kofta123", grades: { math: 85.0, physics: 87.5, english: 90.0 }, Fees: "10000", paidFees: "7000" }]
    localStorage.setItem("users", JSON.stringify(users))
} else {
    users = JSON.parse(localStorage.getItem("users"))
}
if (localStorage.getItem("current user") == null) {
    var CurrentUser = { id: "", username: "", email: "", grades: { math: 0, physics: 0, english: 0 }, Fees: "", paidFees: "" };
    localStorage.setItem("current user", JSON.stringify(CurrentUser))
} else {
    CurrentUser = JSON.parse(localStorage.getItem("current user"))
}
//end intialization



function login() {
    var found = false
    var adminf = false

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == document.getElementById("email").value) {
            if (users[i].password == document.getElementById("password").value) {
                var x = i;
                if (i == 0) {

                    CurrentUser = users[i];
                    console.log(localStorage.setItem("current user", JSON.stringify(CurrentUser)))
                    found = true
                    adminf = true
                    loggedin = true
                    console.log(localStorage.setItem("logged in", loggedin))
                    window.location.href = "admin.html";
                    break;
                }
                found = true;
                break;
            }
        }
    }
    if (found == true) {
        if (adminf == false) {
            CurrentUser = users[x];
            console.log(localStorage.setItem("current user", JSON.stringify(CurrentUser)))
            loggedin = true
            console.log(localStorage.setItem("logged in", loggedin))
            window.location.href = "Student data and information.html";

        }
    } else {
        alert("Email or Password is incorrect!")
    }
    return found;
}

function logout() {

    loggedin = false;
    console.log(localStorage.setItem("logged in", loggedin))
    window.location.href = 'Home page.html'


}

function displayLogin() {

 //displays logged in user as navigation buttons

    if (loggedin == true) {
        if (CurrentUser.id == 1) {
            document.getElementById("login").innerHTML += "<button class='navButtons' onclick='adminpage()'>" + CurrentUser.username + "</button><button class='navButtons ' onclick='logout()'> Log Out </button>"
        } else { document.getElementById("login").innerHTML += "<button class='navButtons' onclick='Studentpage()'>" + CurrentUser.username + "</button><button class='navButtons ' onclick='logout()'> Log Out </button>" }
    } else {
        console.log("loggedin: " + loggedin)
        document.getElementById("login").innerHTML += "<button class = 'navButtons' onclick='loginpage()'>Login</button>";
        // document.getElementById("login").innerHtml = "< a href = 'login and signup.html ' > < button class = 'navButtons ' > login | signup </button></a > "
    }
}

function Studentpage() {
    window.location.href = 'Student data and information.html'
}

function adminpage() {
    window.location.href = 'admin.html'
}

function loginpage() {
    window.location.href = 'Login.html'
}