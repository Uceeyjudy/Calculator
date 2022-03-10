let result = document.getElementById('inputText')
let calculate =(number)=>{
    result.value += number
}
function reset(){
    result.value =' '
}
function del(){
    result.value=result.value.slice(0, -1)
}
//const expressions = document.querySelector(".expressions")
// function add(x,y){
//     return x+y
// }
// function subtract(x,y){
//     return x-y
// }
// function multiply(x,y){
//     return x*y
// }
// function divide(x,y){
//     return x/y
// }