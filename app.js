const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 7000

app.get("/", (req,res)=> {
    res.json({kaew: "good", data: [1,2,3,4]})

}
)

app.get("/aaa", (req,res)=> {
    res.json({kaew: "good aaaa", data: [1,2,3,4,5]})

}
)

app.listen(PORT, ()=>{
    console.log(`Server is running. ${PORT}`)
})
