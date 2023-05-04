const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is Firewall Services")
})

module.exports = router