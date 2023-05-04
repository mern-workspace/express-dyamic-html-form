const express = require("express")
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is the user page")
})

router.get('/service',(request,response)=>{
    response.render('users/service')
})

router.post('/',(request,response)=>{
    isAValidValue = true
    if(isAValidValue)
    {
        services.push({name:request.body.serviceName})
        response.redirect(`/user/${services.length - 1}`)
    }
    else
    {
        console.log("error");
        response.render('users/service', {serviceName : request.body.serviceName})
        // response.render('users/service')
    }
    
})

router.get('/:id',(request,response)=>{
    response.send(`Service Name Added with Id : ${request.params.id}`)
})

const services = [
    {
        name : 'Web Development'
    },
    {
        name : "Cyber Security Service"
    },
    {
        name : "Mobile App Development Service"
    },
    {
        name: "Digital Marketing Service"
    },
    {
        name: "Firewall Service"
    },
    {
        name: "CloudBackup Service"
    },
    {
        name : "Networking Service"
    },
    {
        name : "SaaS"
    }
]

router.param('id',(request,response,next,id)=>{
    request.user = services[id]
    next()
})

module.exports = router