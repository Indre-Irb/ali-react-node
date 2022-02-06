//Task1

const valid = require("email-validator")

module.exports = {
    //Task1
    // validateEmail: (req, res, next) => {
    //     const {email} = req.body
    //     if (valid.validate(email)) {
    //         next()
    //     } else {
    //         res.send({error: "email is not valid"})
    //     }
    // },
    // checkTitle: (req, res, next) => {
    //     const {title} = req.body
    //     if (title.length > 3 && title.length < 20){
    //         next()
    //     } else {
    //         res.send({error: "title is not correct"})
    //     }
    // },
    // checkDescription: (req, res, next) => {
    //     const {description} = req.body
    //    if (description.length > 10 && description.length < 50){
    //        next()
    //    } else {
    //        res.send({error: "description is not correct"})
    //    }
    // },
    // checkUserName: (req,res, next) => {
    //     const {username} = req.body
    //     if (username === username.toUpperCase()){
    //         next()
    //     } else {
    //         res.send ({error: "username is not uppercase"})
    //     }
    // },
    // checkPassword: (req,res, next) => {
    //     const {pass1, pass2} = req.body
    //     if (pass1 === pass2){
    //         next()
    //     } else {
    //         res.send({error: "password does not match"})
    //     }
    // },


    //Task2
    // registeredDetails: (req, res, next) => {
    //     const {username, pass1, pass2} = req.body
    //     if(username !== username.toUpperCase()){
    //         return res.send({message: "Username must be in UpperCase"})
    //     }
    //     if(username.length < 3 || username.length > 20){
    //         return res.send({message: "Username is too short or too long"})
    //     }
    //     if (pass1.length < 3 || pass1.length > 20){
    //         return res.send({message: "Password is too short or too long"})
    //     }
    //     if(pass1 !== pass2){
    //         return res.send({message: "Passwords does not match"})
    //     }
    //     else {
    //         next()
    //     }
    // },
    // checkPost: (req,res, next) => {
    //     const {title, image, description} = req.body
    //     if (title.length < 3 || title.length > 20){
    //         res.send ({message: "Title is too short or too long"})
    //     }
    //     if (description.length < 3 || description.length > 25){
    //         res.send ({message: "Description is too short or too long"})
    //     }
    //     if (!image.includes("http")){
    //         res.send({message: "Image address is not correct"})
    //     } else {
    //         next()
    //     }
    // },

    //Task3

}
