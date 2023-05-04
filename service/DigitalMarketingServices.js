const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is Digital Marketing Services")
})

module.exports = router