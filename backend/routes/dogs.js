const router = require('express').Router();
let Dog = require('../models/dog.model');

router.route('/').get((req, res) => {
    Dog.find().then(
        dogs => res.json(dogs)).catch(
            err => res.status(400).json('Error: ' + err)
    );
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newDog = new Dog({name});

    newDog.save().then(() => {
        res.json('Dog added!');
    }).catch(err => {
        res.status(400).json('Error: ' + err)
    });
});

module.exports = router;