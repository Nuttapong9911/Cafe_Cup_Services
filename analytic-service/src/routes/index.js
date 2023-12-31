const express = require('express')
const reviewController = require('../controllers/reviewController')
const reachController = require('../controllers/reachController')

const router = express.Router()

router.get('/livez', async (req, res) => res.status(200).json({ status: "ok" }))

router.post('/review/add', reviewController.add)
router.get('/review/get', reviewController.get)

router.post('/reach/add', reachController.add)
router.get('/reach/get', reachController.get)

// [ ] routes for analytics

module.exports = router