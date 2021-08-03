const router = require('express').Router()
const { GetCheckDiri } = require('../utils/axios')

router.get('/', (req, res) => {
    const url = `${req.protocol}://${req.hostname}${req.hostname == 'localhost' ? `:${process.env.PORT || 3001}` : ''}`
    res.json({
        "message": "Data vaksinasi nasional", 
        "enpoints": {
            "json": {
                vaksin: `${url}/api/vaksins`
            }
        }
    })
})

router.get('/vaksins', async(req, res) => {
    const data = await GetCheckDiri()
    res.json(data)
})

module.exports = router
