const express = require(`express`);
const router = express.Router();

router

.post(`/:id`, (req, res) => {
    let {name, deets} = req.body
    res.send(`Thank you ${name} for the deets as follows ${deets}`)
})

.get(`/:id`, (req, res) => {
    let id = req.params.id
    res.send(`ya got ${id}`)
})

.get(`/`, (req, res) => {
    res.send(`hello cards`)
})





module.exports = router;