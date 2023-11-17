import express from "express"
import bodyParser from "body-parser"
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const port = 3000
const localIP = `127.0.0.1`

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (request, response) => response.sendFile(__dirname + "/index.html"))

app.get("/saida", (request, response) => response.sendFile(__dirname + "/form.html"))

app.get("/observe.js", (request, response) => {
    response.sendFile(__dirname + "/observe.js", {
        headers: { "Content-Type": "application/javascript" },
    })
})

app.get("/alpine.js", (request, response) => {
    response.sendFile(__dirname + "/alpine.js", {
        headers: { "Content-Type": "application/javascript" },
    })
})



app.post('/', (request, response) => console.log(request.body.dadosValue))

app.listen(port, localIP, () => console.log(`Server is running on http://localhost:${port}`))