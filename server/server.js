const express = require(`express`);
const cors = require(`cors`);
const app = express();


const PORT = process.env.PORT || 6060;

const cardRoute = require(`./routes/cards`)

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 


app.use(express.static(`public`));

app.get(`/hello`, (req, res) => {
    res.send({express: 'Hello from Express B'})
});

app.use(`/kb/cards`, cardRoute)

app.listen(PORT, (err) => {
    console.log(`Server be runnin' runnin on ${PORT}`)
})

