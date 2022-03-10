let result =document.getElementById('inputText')
let calculate =(number)=>{
   result.value += number
    if (operator ==='+'){
        result= num +=num
    }
    else if(operator==='-'){
        result= num -= num
    }
    else if (operator ==='*'){
        result = num *= num
    }
    else if (operator === '/'){
        if (num <=0){
           result = num='Error'
            
        }else { result= num /=num}
    }
    return result;
}
function reset(){
    result.value =' '
}
function del(){
    result.value=result.value.slice(0, -1)
}
const equal = document.querySelector('.equal')
equal.addEventListener("click", ()=>{
    calculate();
})
