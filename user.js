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


const services = [
    {
        'serviceName' : 'Web Development',
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS   
    },
    {
        'serviceName' : "Cyber Security Service",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    },
    {
        'serviceName' : "Mobile App Development Service",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    },
    {
        'serviceName': "Digital Marketing Service",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    },
    {
        'serviceName': "Firewall Service",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    },
    {
        'serviceName': "CloudBackup Service",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    },
    {
        'serviceName' : "Networking Service",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    },
    {
        'serviceName' : "SaaS",
        'serviceCost' : 25000,
        'serviceDuration' : 40     // DAYS 
    }
]


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
        // response.redirect(`/user/${services.length - 1}`)

        response.send(`${request.body.serviceName} ${request.body.serviceCost}`)
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
    response.send(`Service Name : ${request.user.name} , Service Cost : ${request.user.cost} rupees , Service Duration : ${request.user.duration} days `)
})

router.put('/:id',(request,response)=>{
    const {id} = request.params
    const {serviceName} = request.body
    const {serviceCost} = request.body
    const {serviceDuration} = request.body

    const service = services.find((service)=> Number(id) === Number(services[Number(id)]))

    if(!service)
    {
        response.status(402)
    }
    const newlyAddedService = services.map((service)=>{
        if(Number(id) === services[id])
        {
            console.log('yep')
            service.serviceName = serviceName
            service.serviceCost = serviceCost
            service.serviceDuration = serviceDuration
        }
        return service
    })
        response.status(200).json({message : newlyAddedService})
})


router.param('id',(request,response,next,id)=>{
    request.user = services[id]
    request.userId = id
    console.log(request.userId)
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