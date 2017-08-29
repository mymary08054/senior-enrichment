const db = require('./db/index.js');
const Campus = require('./db/models/Campus');
const Student = require('./db/models/Student');

const students = [
  { name: 'Space Mario', campusId: 1 },
  { name: 'Weegee', campusId: 2 },
  { name: 'walugi', campusId: 0 },
  { name: 'rosalina', campusId: 1 },
  { name: 'luma', campusId: 2 }
];

const campuses = [{
  name: 'Beach Planet',
  image: '/images/beach.jpg'
}, {
  name: 'Space Mushroom Kingdom',
  image: '/images/space.jpg'
}, {
  name: 'Pop Star',
  image: '/images/pop.jpg'
}];

const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  ))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
