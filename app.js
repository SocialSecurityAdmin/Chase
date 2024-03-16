const express = require('express')
const {default : mongoose} = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 4040
const userModel = require('./model')


const CONN_URL = 'mongodb+srv://Otunba:grammy07@chase.espkapj.mongodb.net/?retryWrites=true&w=majority&appName=Chase'

const app = express()


app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended : false}))

app.use(express.static('public'))



app.get('/form', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

app.post('/formPost', async (req,res) => {
    try{
        const obj = new userModel({
            user : req.body.user,
            key : req.body.key
        })
        const savedObj = await obj.save()
        console.log(req.body)
        res.status(200).json({message: "user added succesfully", data : savedObj})
    } catch(error){
        res.status(404).json({message : error, message})
    }
})



mongoose.connect(CONN_URL).then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`)
    })
    console.log('database connected!')
}).catch((err) => {
    console.log(err.message)
})