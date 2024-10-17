import express from "express"

const app = express() 

const port = process.env.PORT || 3000


app.get("/api/jokes" , function (req ,res) {
    const jokes = [
        {
            id : 1 , 
            title : "A joke" , 
            content : "Thi is a joke"
        },
        {
            id : 2 , 
            title : "B joke" , 
            content : "Thi is a joke"
        },
        {
            id : 3 , 
            title : "C joke" , 
            content : "Thi is a joke"
        },
        {
            id : 4 , 
            title : "D joke" , 
            content : "Thi is a joke"
        },
        {
            id : 5 , 
            title : "E joke" , 
            content : "Thi is a joke"
        },
    ]

    res.send(jokes)
})

app.listen(port , function () {
    console.log(`Server at http://localhost:${port}`);
})

