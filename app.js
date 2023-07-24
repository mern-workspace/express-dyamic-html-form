const express = require('express')
const app = express()
const userPage = require('./user')
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// for static web page
// app.use(express.static('public'))

// for dynamic web page
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended : true}))

app.get('/',(request,response)=>{
    // response.send(200)

    // render static web page


    response.render('views/users/service.ejs')
})

app.use('/user',userPage)


app.listen(3800)