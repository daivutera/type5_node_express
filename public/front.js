//nuorodos i elementus
const btn1 = document.getElementById("btn1")
const result = document.getElementById("result")
const url = "http://localhost:3000/posts"

btn1.addEventListener("click", ()=>{
    console.log("click");
    //fetch from url and console.log
    fetch("http://localhost:3000/api/camel")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if (data.message){
            console.log(data)
            result.innerHTML=data.message
        }
    })
})