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
	Campus.findOne({ id: req.params.campusId })
		.then(campuses => res.json(campuses))
		.catch(next);
})

api.post('/campuses', function (req, res, next) {
	Campus.create(req.body)
		.then(campus => res.status(201).json(campus))
		.catch(next);
});

api.put('/campuses/:campusId', function (req, res, next) {
	Campus.update(req.body, {
		where: { id: req.params.campusId },
		returning: true,
		plain: true
	})
		.then(campus => {
			return res.status(200).json(campus)
		})
		.catch(next);
});

api.delete('/campuses/:campusId', function (req, res, next) {
	Campus.destroy({ where: { id: req.params.campusId } })
		.then(() => res.status(204).end())
		.catch(next);
});

///////Student/////////
api.get('/students', (req, res, next) => {
	Student.findAll()
		.then(students => res.json(students))
		.catch(next);
})

api.get('/students/:studentId', (req, res, next) => {
	Student.findOne({ id: req.params.studentId })
		.then(students => res.json(students))
		.catch(next);
})

api.post('/students', function (req, res, next) {
	Student.create(req.body)
		.then(student => res.status(201).json(student))
		.catch(next);
});

api.put('/students/:studentId', function (req, res, next) {
	Student.update(req.body, { where: { id: req.params.studentId } })
		.then(student => res.status(200).json(student))
		.catch(next);
});

api.delete('/students/:studentId', function (req, res, next) {
	Student.destroy({ where: { id: req.params.studentId } })
		.then(() => res.status(204).end())
		.catch(next);
});

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({ hello: 'world' }))

module.exports = api