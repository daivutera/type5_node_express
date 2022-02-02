const express = require('express')
const { makeCamelCase } = require('./functions')
//const func = require (makeCamelCase)
const app = express()
const cors = require("cors")

app.use(cors());//middlewear//sita app.use(cors) reikia deti pries visus get, nes kitaip neveiks

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

//api endpoint
//localhost:3000/=>hello back end world
//app -express app
//get - metodas http get, post, put, patch, delete
// "/" end pointo adresas
//request=atejusios uzklausos objektas
//response=kaip mes atsakome objektas(atsakymo atgal objektas)
//{request, response}=>{<ivyks kodas kai ateisim pagal adresa ir metoda>}
app.get("/", (request, response) => {
    response.send("hello back end world")
})

app.get("/posts", (request, response) => {
    const post1 = {
        title: "My first post",
        body: "Story of My first post"
    }
    response.json(post1)
})

app.get("/api/camel", (request, response) => {
    const rez = makeCamelCase("Camel goes in a desert");
    response.json({ message: rez })
});


const PORT = 3000//BUna 3001, 8000, 3001, 8080, 5000. Jei kuris nelaisvas,bandyt kita.localhost:3000 ar kazkaip panasiai rasos




app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})