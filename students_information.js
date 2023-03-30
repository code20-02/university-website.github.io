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


function displayUserInfo() {
    document.getElementById("studentinfo").innerHTML += "<div id='userid_current' class='useritem' ><h3> Student Id: " + CurrentUser.id + "</h3><p>Student name: " + CurrentUser.username + " </p><p> Email Address: " + CurrentUser.email + "</p></div>"
}

function displayGradesInfo() {
    clearRequestedInfo()
    document.getElementById("requestedinfo").innerHTML += "<div id='userid_current' class='useritem' ><h4>Your Grades</h4><p>Math: " + CurrentUser.grades.math + "</p><p> Physics:" + CurrentUser.grades.physics + "</p><p> English: " + CurrentUser.grades.english + "</p></div>"
}

function displayFeesInfo() {
    clearRequestedInfo()
    document.getElementById("requestedinfo").innerHTML += "<div id='userid_current' class='useritem'><h4>Your fees</h4><p>upstanding fees: " + (CurrentUser.Fees - CurrentUser.paidFees) + "</p><p> Tuition Fees: " + CurrentUser.Fees + "</p><p> Paid fees:" + CurrentUser.paidFees + "</p>"
}

function PayForm() {
    clearRequestedInfo()
    document.getElementById("requestedinfo").innerHTML += "<div id='userid_current' class='form'><form><p>how much do you wnat to pay?</p><input type='number' id='payment' name='Payment' placeholder='payment'><input type='button' class='button' value='Pay' onclick='Pay()'><input type='button' class='button' value='cancel'onclick='clearRequestedInfo()'></form>"
}

function Pay() {
    CurrentUser.paidFees += document.getElementById("payment").value
    clearRequestedInfo()
    console.log(CurrentUser.paidFees)
    console.log(localStorage.setItem("CurrentUser", JSON.stringify(CurrentUser)))
    console.log(localStorage.getItem("currentUser"))
    users[CurrentUser.id+1].paidFees =CurrentUser.paidFees
    console.log(localStorage.setItem("users", JSON.stringify(users)))
}

function MakeRequest() {
    window.location.href = ""
}

function clearRequestedInfo() {
    document.getElementById("requestedinfo").innerHTML = ""
}