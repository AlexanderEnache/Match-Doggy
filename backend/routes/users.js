const router = require('express').Router();
let User = require('../models/model');

router.route('/').get((req, res) => {
	User.find().then(
		users => res.json(users)).catch(
			err => res.status(400).json('Error: ' + err)
	);
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const repassword = req.body.repassword;

	if(password === repassword){
		const newUser = new User({username, password});

		newUser.save().then(() => {
			res.json('Added');
		}).catch(err => {
			res.status(400).json('Error: Here: ' + err)
		});
		
	}else{
		res.json('Password');
	}
});

router.route('/sign-in').post((req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.find({username: username, password: password}).then(users => {
		res.json(users);
	}).catch(err => {
		res.status(400).json('Error: ' + err);
	});
});

module.exports = router;