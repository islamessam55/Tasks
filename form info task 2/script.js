
var users = []

var form = document.getElementById("userForm");
var btn = document.getElementById("but");
var cardsContainer = document.getElementById('cards-container')

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var data = new FormData(form);
    var obj = Object.fromEntries(data)

    users.push(obj);

    console.log(users); 

    form.reset();
});


btn.addEventListener("click", ()=>{
    users.forEach((item ,index)=>{
        console.log(item)
        var h4 = document.createElement('h4')
        var div = document.createElement('div')
        h4.classList.add('text-primary')
        h4.innerText = item.username
        div.classList.add('alert','alert-primary')
        div.append(h4)
        cardsContainer.append(div)
        
        console.log(div)
    })
})
