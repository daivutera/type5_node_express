function makeCamelCase(str){
    console.log(str)
    
    const arrFromString = str.split("")
    console.log("arrFromString===", arrFromString);
    const arrayAfterProcess = [];
    arrFromString.forEach((element, index, arr)=>{
        if(element!==" "){
            arrayAfterProcess.push(element)
        }else {
    arr[index+1] = arr[index +1].toUpperCase();
        }
    })
    arrayAfterProcess[0]=arrayAfterProcess[0].toLowerCase()
    const stringFromArr = arrayAfterProcess.join("")
    console.log("stringFromArr===", stringFromArr)
    return stringFromArr
    }
    makeCamelCase("ar veikia kupranugario case?")
    
    module.exports = {
        makeCamelCase,
    }