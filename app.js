const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors())


app.listen(4000)
app.use(express.json());

const router = require("./routes/main")
app.use("/", router)
