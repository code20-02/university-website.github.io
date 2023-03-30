//intial set of users

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
var chosenid = 0;

function REG() {
    var valid = true;
    if (document.getElementById("email").value.indexOf("@") == -1 || document.getElementById("email").value.indexOf(".") == -1) {
        alert("Please Enter valid email, e.g:example@mail.com")
        document.getElementById("email").focus();
        valid = false;
    }
    if (document.getElementById("password").value.length < 8) {
        alert("Password need to be at least 8 charchters!")
        document.inputForm.password.focus();
        valid = false;
    }
    if (valid == true) {

        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var studentgrade = { math: document.getElementById("math").value, physics: document.getElementById("physics").value, english: document.getElementById("english").value }
        var tuitionFees = document.getElementById("Fees").value;
        var paidTuitionFees = document.getElementById("paidFees").value;
        var studentName = document.getElementById("username").value;
        var student = { id: 0, username: studentName, email: email, password: pass, grades: studentgrade, Fees: tuitionFees, paidFees: paidTuitionFees }
        loggedin = true;
        console.log(localStorage.setItem("logged in", loggedin))

        users.push(student);
        var id = users.length - 1;
        users[id].id = id + 1;
        console.log(localStorage.setItem("users", JSON.stringify(users)))


        alert("New student " + users[id].username + " has been added !");
        displayUsers()
    }
}
var forumOpened = false;

function addStudentForm() {
    if (!forumOpened) {
        document.getElementById("admincontrol").innerHTML += "<div name='inputForm' method ='post' class='admincontrolForm'> <h1> ADD new Student </h1> <form><p>Email</p><input type='email' name='email' id='email' placeholder='Enter Email' placeholder='Email' required><p>Password</p><input type='password' id='password' placeholder='Enter Password' placeholder='Password' required><p>Student name</p><input type='text' name='username' id='username' placeholder='Enter Name' placeholder='Student Name' required> <h3>Grades</h3><p>Math</p><input type='number' name='math' id='math' placeholder='math' required><p>Physics</p><input type='number' name='physics' id='physics' placeholder='physics' required><p>English</p><input type='number' id='english' name='english' placeholder='english'><h3>Fees</h3><p>Tuition Fees</p><input type='number' name='Fees' id='Fees' placeholder='fees'><p>Paid Fees</p><input type='number' name='paidFees' id='paidFees' placeholder='Paid fees'><input type='button' name='' value='Add Student' onclick='addStudent()'><input type='button' name='' value='Cancel' onclick='clearAdmincontrol()'></form></div>"
        forumOpened = true;
    }
}

function addStudent() {
    REG()
    var i = users.length - 1


}

function deleteStudentForm() {
    if (!forumOpened) {
        forumOpened = true;
        document.getElementById("admincontrol").innerHTML += "<div id='inputForm' method = 'post' class='admincontrolForm'> <h1> Delete  Student </h1> <form><input type='number' name='id' id='id' placeholder='id'><input type='button' name='' value='Delete Student' onclick='deleteStudent()'><input type='button' name='' value='Cancel' onclick='clearAdmincontrol()'></form></div>"
    }
}

function editstudentIDForm() {
    if (!forumOpened) {
        document.getElementById("admincontrol").innerHTML += "<div id='inputForm' method = 'post' class='admincontrolForm'> <h1> Edit Student </h1> <form><input type='number' name='id' id='id' placeholder='id'><input type='button' name='' value='Edit Student' onclick='editStudentForm()'><input type='button' name='' value='Cancel' onclick='clearAdmincontrol()'></form></div>"

        if (id >= users.length) {
            editstudentIDForm()
        }
        forumOpened = true
    }
}

function editStudentForm() {
    chosenid = document.getElementById("id").value - 1
    console.log(chosenid)
    clearAdmincontrol()
    CurrentUser = users[chosenid]
    document.getElementById("admincontrol").innerHTML += "<div name='inputForm' method = 'post' class='admincontrolForm'> <h1> Edit Student </h1> <form><p>email</p><input type='email' id='email' name='email' placeholder=''  ><p>Password</p><input type='password' id='password' placeholder='' ><p>Student name</p><input type='text' name='username' placeholder=''> <h3>grades</h3><p>math</p><input type='number' name='math' placeholder='' ><p>Physics</p><input type='number' name='physics' placeholder=''><p>English</p><input type='number' name='english' placeholder=''><h3>Fees</h3><p>Tuition Fees</p><input type='number' id='Fees' name='Fees' placeholder=''><p>Paid Fees</p><input type='number' id='paidFees' name='paidFees' placeholder=''><input type='button' name='' value='Edit Student' onclick='editStudent()'><input type='button' name='' value='Cancel' onclick='clearAdmincontrol()'></form></div>"
}

function editStudent() {


    if (document.getElementById("email").value != "") {

        var email = document.getElementById("email").value
        users[chosenid].email = email
    }
    if (document.getElementById("password").value != "") {
        var password = document.getElementById("password").value
        users[chosenid].password = password
    }
    console.log(document.getElementById("username"))
    if (document.getElementById("username") != null) {
        var username = document.getElementById("username").value
        users[chosenid].username = username
    }
    if (document.getElementById("math") != null) {
        var math = document.getElementById("math").value
        users[chosenid].grades.math = math
    }
    if (document.getElementById("physics") != null) {
        var physics = document.getElementById("physics").value
        users[chosenid].grades.physics = physics
    }
    if (document.getElementById("english") != null) {
        var english = document.getElementById("english").value
        users[chosenid].grades.english = english
    }
    if (document.getElementById("Fees") != null) {
        var Fees = document.getElementById("Fees").value
        console.log(Fees)
        users[chosenid].Fees = Fees
    }
    if (document.getElementById("paidFees") != null) {
        var paidFees = document.getElementById("paidFees").value
        users[chosenid].paidFees = paidFees
    }
    console.log(localStorage.setItem("users", JSON.stringify(users)))
    clearAdmincontrol()
    clearUsergrid()
    displayUsers()
}

function deleteStudent() {

    var i = document.getElementById("id").value
    i--;
    console.log("i = ", i)
    var k = 0;
    var usables = [];
    for (var u = 0; u < users.length; u++) {
        if (u != i && k < users.length - 1) {

            usables[k] = users[u]
            console.log(JSON.stringify(usables[k]))
            console.log("id for" + k + "user" + users[k].id)
            console.log(usables[k].id = k + 1)
            k++;


        }
    }
    console.log(JSON.stringify(usables))
    console.log(localStorage.setItem("users", JSON.stringify(usables)))

    //window.location.href = "admin.html"

}

function clearUsergrid() {
    document.getElementById("usersgrid").innerHTML = ""
}

function displayUsers() {
    clearUsergrid();
    for (var i = 1; i < users.length; i++) {
        document.getElementById("usersgrid").innerHTML += "<div id='userid_" + i + "' class='useritem' ><h3> Student ID: " + users[i].id + "</h3><p>Student name: " + users[i].username + " </p><p> Email Address: " + users[i].email + "</p><p> Tuition Fees: " + users[i].Fees + "</p><p> Paid fees:" + users[i].paidFees + "</p><h4>Grades</h4><p>Math: " + users[i].grades.math + "</p><p> Physics:" + users[i].grades.physics + "</p><p> English: " + users[i].grades.english + "</p></div>"
    }
}

function clearAdmincontrol() {
    forumOpened = false;
    document.getElementById("admincontrol").innerHTML = "";
}