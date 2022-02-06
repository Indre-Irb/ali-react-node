const express = require("express")


const app = express()




// app.get("/info", (req, res) => {
//     console.log("asdasd")
//     res.send({ok: "abc"})
// })
//
// // app.get("/username/:name", (req, res) => {
// //     req.params.name // pasiimami duomenys
// //     res.send // išsiųsti duomenis į serverį(siunčiame visada objektą {})
// // })
//
// app.get("/banana", (req,res)=> {
//     res.send({color: "yellow"})
// })
// app.get("/orange", (req,res)=> {
//     res.send({color: "orange"})
// })
// app.get("/apple", (req,res)=> {
//     res.send({color: "red"})
// })

//Task2

// const whoiser = require("whoiser")
// const cors = require("cors")
//
// app.use(cors())
// app.get("/check/:domain", (req, res) => {
//         const domain = req.params.domain
//
//         async function check(domain) {
//             const success = await whoiser(domain)
//             res.send ({info: success})
//         }
//         check(domain);
//     }
// )

//Task 3

// create these modules in backed:
// random username generator
// module which will get random photo generated
// random city generated
// from font end send amount of users you need
// depending on that amount generate array with user objects
// and return array to front end


const name = require(`./modules/myModule1`)
const image = require(`./modules/myModule2`)
const city = require('./modules/myModules3')
const cors = require("cors")

app.use(cors())
// app.get("/:num", (req, res) => {
//     const number = req.params.num
//     const arr = []
//     for (let i = 0; i < number; i++) {
//         const card = {
//             name: name(),
//             image: image(),
//             city: city()
//         }
//         arr.push(card)
//     }
//     res.send({arr: arr})
//     console.log(arr)
// })


app.listen(4000)
app.use(express.json());

const router = require("./routes/main")
app.use("/", router)
