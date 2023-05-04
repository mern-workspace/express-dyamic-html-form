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

router.get('/:id([0-9]{1,2})',(request,response)=>{
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


router.use('/webDevelopment',WebDevelopmentServicePage)
router.use('/cyberSecurity',CyberSecurityServicePage)
router.use('/mobileAppDevelopment',MobileAppDevelopmentServicePage)
router.use('/digitalMarketing',DigitalMarketingServicePage)
router.use('/cloudBackup',CloudBackupServicePage)
router.use('/firewall',FirewallServicePage)
router.use('/networking',NetworkingServicePage)
router.use('/SaaS',SaaSServicePage)

module.exports = router