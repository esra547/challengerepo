let myname ="esra"
myname ="hello"
console.log(myname)
const num= 52.5
console.log(num * 6)   
console.log(7==9)
let x = null
console.log(x)
const names = ["youssef","esra","asma","nour"]
for(let i = 0; i < names.length; i++){
    console.log(names[i])
    console.log(names[i].length)
}
for(let i of names ){
    console.log(i)
}
console.log(names[0])
console.log(names[2])
const person ={
    firstname:"yassmine",
    lastname: "tbourski",
    school: 1 }
console.log(person)
console.log(person.lastname)
const students = [
    {
        firstName:"yasmine",
        lastName: "Tebourski",
        school: 1
    },{
        firstName:"dhia",
        lastName: "dachraoui",
        school: 5
    },{
        firstName:"khalil",
        lastName: "ben kram",
        school: 4
    }
]
console.log(students[1].firstName)
if(students[1].firstName== "khalil"){
    console.log(true)
}else if(students[2].firstName== "khalil"){
    console.log(false)}
function add (num1, num2){
    return num1 + num2
}
console.log(add(1,5))