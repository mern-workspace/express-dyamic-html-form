const express = require('express')
const app = express()
const userPage = require('./user')

app.set("view engine","ejs")

app.use(express.urlencoded({extended : true}))

app.get('/',(request,response)=>{
    response.send(200)
})

app.use('/user',userPage)


app.listen(3800)