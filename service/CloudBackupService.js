const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is Cloud Backup Services")
})

module.exports = router