function Show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
};

//Submit Button
function Verify() {
    var userRef = "esw";
    var passRef = "pidcontrol";

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
        alert("Connected")
        location.replace = "index.html";
    } else {
        alert("It's seem you made a mistake...")
    }
};