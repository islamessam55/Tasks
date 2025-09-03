
var users = []

var form = document.getElementById("userForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    users.push({ name, email });

    console.log(users); 

    form.reset();
});