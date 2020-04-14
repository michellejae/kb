const express = require(`express`);
const router = express.Router();

router

.delete(`/id`, (req, res) => {
    let id = req.params.id
})

.put(`/:id`, (req, res) => {
    let id = req.params.id
    let {name, deets, priority, status, created_by, assigned_to} = req.body
    res.send(`${name}, ${deets}, ${priority}, ${status}, ${assigned_to}, ${created_by}, ${id}`) 
})

.post(`/`, (req, res) => {
    let {name, deets, priority, status, created_by, assigned_to} = req.body
    res.send(`${name}, ${deets}, ${priority}, ${status}, ${assigned_to}, ${created_by}`)
})

.get(`/:id`, (req, res) => {
    let id = req.params.id
    res.send(`ya got ${id}`)
})

.get(`/`, (req, res) => {
    res.send(`hello cards`)
})





module.exports = router;