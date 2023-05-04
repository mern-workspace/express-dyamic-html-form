const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is Mobile App Development Services")
})

module.exports = router