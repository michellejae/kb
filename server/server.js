const express = require (`express`);


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(`public`));


app.get(`/kb/hi`, (req, res) => {
    res.send({express: `Hello from Express`})
})

app.listen(PORT, (err) => {
    console.log(`Server be runnin' runnin' on ${PORT}`)
})