'use strict'
const api = require('express').Router()
const db = require('../db')
const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;

///////Campus/////////
api.get('/campuses', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next);
})

api.get('/campuses/:campusId', (req, res, next) => {
	Campus.findOne({id: req.params.campusId})
		.then(campuses => res.json(campuses))
		.catch(next);
})

api.post('/campuses', function (req, res, next) {
	Campus.create(req.body)
  .then(campus => res.status(201).json(campus))
  .catch(next);
});

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))

module.exports = api