// we import necessary model modules
const Admins = require('../db/models').Admins;
const Meals = require('../db/models').Meals;

// controller function to signup an admin
const signup = (req, res) =>
  Admins
    .create({
      email: req.body.email,
      password: req.body.password,
      role: 'Admin',
      username: req.body.username,
    })
    .then(admin => res.status(201).send({ message: 'Succesfully registered', admin }))
    .catch(error => res.status(500).send(error.message));

// controller function to add a meal
const Addmeal = (req, res) =>
  Meals
    .create({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
    })
    .then(meal => res.status(201).send({ message: 'Successfully added a meal', meal }))
    .catch(error => res.status(500).send(error.message));

module.exports = {
  signup,
  Addmeal,
};
