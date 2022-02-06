const express = require("express");
const router = express.Router()


router.use(express.json());


const middle = require("../middleware/main")
const {getCode} = require("../controllers/main")

router.get("/product/:product", getCode)

module.exports = router
