
// var Name = "islam"
// var id = 123456
// var age = 35

// console.log(Name)
// console.log(id)
// console.log(age)

// // var clientInfo = Name+ " " + id + " " +age
// var clientInfo = `${Name} ${id} ${age}`

// console.log(clientInfo)

// var isMale = true
// console.log(isMale)

// var isMale = false
// console.log(isMale)

// var h
// console.log(h)

// var y = null
// console.log(y)

// var u = prompt("enter your age")
// console.log(u)


// var a = 20
// a += 5
// a = a + 5
// console.log(a) 


// var b = 10
// console.log(b++) 
// console.log(b) 
// console.log(++b) 

// var a ="ahmed"
// var b = 15
// var c = "15"
// var n = true
// var t =30
// console.log(a >= b) 
// console.log(a >= t) 
// console.log(c === a) 
// console.log(n != c) 
// console.log(b != c) 


// console.log(typeof(a)) 
// console.log(typeof n) 
// console.log(typeof n == typeof a) 
// console.log(typeof n !== typeof a) 

// console.log(typeof n !== typeof a && a == c) 
// console.log(typeof n !== typeof a || a == c) 


// var degree = prompt("Enter your degree")
// if(degree <= 100){
//     if(degree >= 90) console.log("Your degree is A")
//         else if (degree >= 80) console.log("Your degree is B")
//         else if (degree >= 60) console.log("Your degree is C")
//         else console.log("You Failed")
// }
// else console.log("Invalid Degree")



// var start = prompt("enter start number")
// var end = prompt("enter end number")

// for(var i = start; i <= end; i++){
//     console.log(i)
// }



// function sum(n1,n2){
//     var num1 = n1
//     var num2 = n2
//     var result = num1 + num2
//     return result
// }
// var r = sum(2,5)
// console.log(r)


// function looping(start, end, breaknum, cont){
//     for(var i = start; i <= end; i++){
//         if(i == breaknum) break
//         if(i == cont) continue
//         console.log(i)
//     }
// }
// looping(10,20,15,11)


// var arrayItem = ["islam", "essam", 24, "cairo"]
// var element = prompt("Write element")

// if(element == arrayItem.includes(element)){
//     console.log("item found")
// }
// else arrayItem.push(element)

// console.log(arrayItem)

// var num = [3, 10, 50, 100] 
// var ele = prompt("write number")
// var num = num.find((ele)=>{
//     if (ele > 200) console.log("number found")
//         else num.push(ele)
// })

// var users =[
//     {
//         name: "ali",
//         age : 31
//     },
//     {
//         name: "islam",
//         age : 10
//     },
//     {
//         name: "adel",
//         age : 22
//     }
// ]

// console.log(users)
// var index = users.findIndex(user => user.age == 10)
// console.log(index)
// users.splice(index,1)
// console.log(users)

let users = [];

function numberOfUsers(count) {
    var count = prompt("Enter number of users") 
    for (let i = 0; i < count; i++) {
        let name = prompt(`Enter name for user ${i+1}:`);
        let id = prompt(`Enter unique ID for user ${i+1}:`);
        let balance = prompt(`Enter balance for user ${i+1}:`);
        addUser(name, id, balance);
    }
}

function addUser(name, id, balance){
    let exists = users.some(user => user.id === id);
    if (exists) {
        console.log("ID already exists!");
        var id = prompt("enter new id")
        users.push({name,id,balance})
    }
    else users.push({ name, id, balance })
}

function editUserBalanceById(id, newBalance){
    id = prompt("enter your id to edit balance")
    let user = users.find(user => user.id === id);
    if(user){
        let newBalance = prompt("enter new balance")
        user.balance = newBalance;
        console.log(users)
    }
    else console.log("user with id not found")
}

function deleteUserById(id){
    id = prompt("enter your id to delete item")
    let index = users.findIndex(user => users.id === id)
    if(index){
        let removed = users.splice(index, 1)
        console.log(removed)
    }
    else console.log("user with id not found")
}
numberOfUsers()
console.log(users)
editUserBalanceById()
console.log(users)
deleteUserById()
console.log(users)