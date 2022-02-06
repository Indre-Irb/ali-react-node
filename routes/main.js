const express = require("express");
const router = express.Router()

// const {register, login, deleteUser, receiveInfo, settingInfo} = require("../controllers/main")
// const {addPhoto, deletePhoto, updatePost,} = require("../controllers/main")

router.use(express.json());

// router.post("/register", register)
// router.post("/login", login)
// router.post("/delete", deleteUser)
//
// router.get("/:num", receiveInfo)
// router.post("/homepage", settingInfo)

// router.post("/main", addPhoto)
// router.post("/delete", deletePhoto)


//Middleware example and task 1
// const middle = require("../middleware/main")
// const {getResult, deletePosts} = require("../controllers/main")
//
// router.post("/info",
//     middle.validateEmail,
//     middle.checkTitle,
//     middle.checkDescription,
//     middle.checkUserName,
//     middle.checkPassword,
//     getResult
// )
//
// router.post("/deletePost", deletePosts)
// router.post("/singlePost",
//     middle.validateEmail,
//     middle.checkTitle,
//     middle.checkDescription,
//     middle.checkUserName,
//     middle.checkPassword,
//     updatePost
// )

// //Task2
// const middle = require("../middleware/main")
// const {getRegistration, getLogin, getPost, getUsersPosts, getOnePost} = require("../controllers/main")
//
// router.post("/register", middle.registeredDetails, getRegistration)
// router.post("/login", getLogin)
// router.post("/post", middle.checkPost, getPost)
// router.get("/user/:username", getUsersPosts)
// router.get("/posts/:index", getOnePost)


//Task3

const middle = require("../middleware/main")
const {getCode} = require("../controllers/main")

router.get("/product/:product", getCode)

module.exports = router