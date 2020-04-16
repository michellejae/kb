const express = require(`express`);
const router = express.Router();
const Card = require(`../models/Card`);

router

.delete(`/:id`, (req, res) => {
    return new Card({id: req.params.id})
    .destroy({require:true})
    .then(result => {
      return res.json({message:'deleted id'})
    })
    .catch(err => {
      return res.json({message: err.message})
    })
})

.put(`/:id`, (req, res) => {
    let id = req.params.id
    let {name, deets, priority, status, created_by, assigned_to} = req.body
    return new Card({id, name, deets, priority, status, created_by, assigned_to})
    .save()
    .then(newCard => {
        newCard = newCard.toJSON()
        res.json(newCard)
    })
})

.post(`/`, (req, res) => {
    let {name, deets, priority, status, created_by, assigned_to} = req.body;
    return new Card({name, deets, priority, status, created_by, assigned_to})
    .save()
    .then(newCard => {
        newCard = newCard.toJSON()
        res.json(newCard)
    })
})

.get(`/:id`, (req, res) => {
    return new Card({id: req.params.id})
    .fetch()
    .then(card => {
        card = card.toJSON();
        res.json(card)
    })
    
})

.get(`/`, (req, res) => {
    return Card
    .fetchAll()
    .then(cards => {
        cards = cards.toJSON();
        res.json(cards)
    })
})





module.exports = router;