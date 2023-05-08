const express = require("express")
const router = express.Router()

const WebDevelopmentServicePage = require('./service/WebDevelopmnetService')
const CyberSecurityServicePage = require('./service/CyberSecurityServices')
const MobileAppDevelopmentServicePage = require('./service/MobileAppDevelopmentService')
const DigitalMarketingServicePage = require('./service/DigitalMarketingServices')
const CloudBackupServicePage = require('./service/CloudBackupService')
const FirewallServicePage = require('./service/FirewallServices')
const NetworkingServicePage = require('./service/NetworkingService')
const SaaSServicePage = require('./service/SaaS')

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
        services.push({name:request.body.serviceName,cost:request.body.serviceCost,duration:request.body.serviceDuration})
        response.redirect(`/user/${services.length - 1}`)
    }
    else
    {
        console.log("error");
        response.render('users/service', {serviceName : request.body.serviceName})
        // response.render('users/service')
    }
    
})

router.get('/:id([0-9]{1,2})',(request,response)=>{
    // response.send(`Service Name Added with Id : ${request.params.id}`)
    // response.json(request.user)
    response.send(`Service Name : ${request.user.name} , Service Cost : ${request.user.cost} , Service Duration : ${request.user.duration} `)
})

const services = [
    {
        'name' : 'Web Development',
        'cost' : 25000,
        'duration' : 40     // DAYS   
    },
    {
        'name' : "Cyber Security Service",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    },
    {
        'name' : "Mobile App Development Service",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    },
    {
        'name': "Digital Marketing Service",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    },
    {
        'name': "Firewall Service",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    },
    {
        'name': "CloudBackup Service",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    },
    {
        'name' : "Networking Service",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    },
    {
        'name' : "SaaS",
        'cost' : 25000,
        'duration' : 40     // DAYS 
    }
]

router.param('id',(request,response,next,id)=>{
    request.user = services[id]
    next()
})


router.use('/webDevelopment',WebDevelopmentServicePage)
router.use('/cyberSecurity',CyberSecurityServicePage)
router.use('/mobileAppDevelopment',MobileAppDevelopmentServicePage)
router.use('/digitalMarketing',DigitalMarketingServicePage)
router.use('/cloudBackup',CloudBackupServicePage)
router.use('/firewall',FirewallServicePage)
router.use('/networking',NetworkingServicePage)
router.use('/SaaS',SaaSServicePage)

module.exports = router