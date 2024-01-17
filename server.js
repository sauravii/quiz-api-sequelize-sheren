const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const quizRoute = require("./router/quiz")
const jobSheetRoute = require("./router/jobsheet")
const router = require("express").Router();
const authRoute = require("./router/auth");

app.use(cors());
app.use(express.json()) //fungsinya agar bisa baca inputan dri form || for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const db = require("./models")
db.sequlize.sync()

app.get('/', (req, res) => {
  res.send('Quiz Express JS API by Vincent')
})

app.use("/api/quizzes", quizRoute)
app.use("/api/jobsheet", jobSheetRoute)
app.use(authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})