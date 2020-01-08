const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/v1", require("./routes/api_routes"))

app.listen(3400, () => {
  console.log("Server listen on port 3400")
})
