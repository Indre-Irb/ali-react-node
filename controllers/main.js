const validator = require("email-validator");
const {v4: uuidv4} = require("uuid")

const scrape = require('aliexpress-product-scraper');


// let registerData = []

let myArr = []

let details = []

let userList = []
let selected
let allPosts = []



module.exports = {
    // register: (req, res) => {
    //     const data = req.body
    //     console.log(data)
    //     const user = {
    //         email: data.email,
    //         pass1: data.pass1,
    //         pass2: data.pass2
    //     }
    //     if (validator.validate(user.email)) {
    //         if (user.pass1.length > 5 && user.pass1.length < 30) {
    //             if (user.pass1 === user.pass2) {
    //                 registerData.push(user)
    //                 res.send({message: "Registered successfully"})
    //             } else {
    //                 res.send({message: "Wrong details"})
    //             }
    //         }
    //     }
    //     console.log(registerData)
    // },
    // login: (req, res) => {
    //
    //     const info = req.body
    //     console.log(info)
    //     registerData.map(x => {
    //         if (x.email === info.login && x.pass1 === info.password) {
    //             res.send({message: "Login successfully"})
    //         } else {
    //             res.send({message: "Login unsuccessfully"})
    //         }
    //     })
    // },
    // deleteUser: (req, res) => {
    //     const deleteInfo = req.body
    //     console.log(deleteInfo)
    //     registerData = registerData.filter(x => x.email !== deleteInfo.login)
    //     res.send({message: "User deleted"})
    // },
    // receiveInfo: (req, res) => {
    //
    //     const data = req.params.num
    //     console.log(data)
    //     res.send({data})
    // },
    // settingInfo: (req, res) => {
    //     const data = req.body
    // }

    // addPhoto: (req, res) => {
    //     const data = req.body
    //     console.log(data)
    //     {
    //         data && myArr.push(data)
    //     }
    //     res.send({myArr})
    // },
    // deletePhoto: (req, res) => {
    //     const data = req.body
    //     myArr = myArr.filter((x, index) => index !== data.index)
    //     res.send({myArr})
    // },
    //Middleware example and task1
    // getResult: (req, res) => {
    //     const data = req.body
    //     details.push(data)
    //     res.send({ok: "everything is correct", data: details})
    // },
    // deletePosts: (req, res, next) => {
    //     const data = req.body
    //     details = details.filter((x, index) => index !== data.index)
    //     res.send({data: details})
    // },
    // updatePost: (req, res) => {
    //     const data = req.body
    //     console.log(data)
    //     details.splice(data.index, 1, data)
    //     res.send({ok: "everything is correct", data: details})
    // },

    //Task2
    // getRegistration: (req, res) => {
    //     const data = {
    //         username: req.body.username,
    //         pass1: req.body.pass1,
    //         pass2: req.body.pass2,
    //         secretKey: uuidv4()
    //     }
    //     if (userList.find(user => user.username === data.username)) {
    //         res.send({message: "Username already exists"})
    //     } else {
    //         userList.push(data)
    //         res.send({message: "Registration complete", userList})
    //     }
    // },
    // getLogin: (req, res) => {
    //     const {username, pass1} = req.body
    //     selected = userList.find(x => x.username === username)
    //     if (selected) {
    //         if (selected.pass1 === pass1) {
    //             return res.send({message: "User logged successfully", user: selected})
    //         }
    //     } else {
    //         return res.send({message: "Wrong username or password"})
    //     }
    // },
    // getPost: (req, res) => {
    //     const {title, description, image, secretKey} = req.body
    //     const user = userList.find(x => x.secretKey === secretKey)
    //     const post = {
    //         title,
    //         description,
    //         image,
    //         username: user.username,
    //         secretKey
    //     }
    //     if(selected){
    //         allPosts.push(post)
    //         res.send({allPosts})
    //     } else {
    //         res.send({message: "Please log in"})
    //     }
    // },
    // getUsersPosts: (req, res) => {
    //     const name = req.params.username
    //     let oneUserPosts = []
    //     allPosts.find(x => {
    //        if(x.username === name){
    //            oneUserPosts.push(x)
    //        }
    //     })
    //     res.send({oneUserPosts})
    // },
    // getOnePost: (req,res) => {
    //     const onePost = req.params.index
    //     console.log(onePost)
    //     const singlePost = allPosts.find((x,ind) => ind == onePost)
    //     res.send({singlePost})
    //
    // },

    //Task3

    getCode: (req,res) => {
        console.log(req.params)
        scrape(req.params.product).then(info =>
        {
            console.log(info)
            const data = {
                title: info.title,
                images: info.images,
                rating: info.ratings.totalStar,
                quantity: info.totalAvailableQuantity,
                price: info.originalPrice.max,
                variants: info.variants,
                review: info.feedback
            }
            console.log(data)
            res.send({data})
        });
    }
}