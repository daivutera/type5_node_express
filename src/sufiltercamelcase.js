function makeCamelCase(str){
console.log(str)

const arrFromString = str.split("")
console.log("arrFromString===", arrFromString);
arrFromString[0]=arrFromString[0].toLowerCase()
const arrayAfterProcess = [];
const stringFromArr= arrFromString.filter((element, index, arr)=>{
    if(element!==" "){
        return element;
    }else {
arr[index+1] = arr[index +1].toUpperCase();
    }
}).join("")

//const stringFromArr = arrayAfterProcess.join("")
console.log("stringFromArr===", stringFromArr)
return stringFromArr
}
makeCamelCase("Ar veikia kupranugario case?")

module.exports = {
    makeCamelCase,
}
  
 