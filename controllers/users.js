const Users = require('../db/models').Users;

const signup = (req, res) =>
  Users
    .create({
      email: req.body.email,
      password: req.body.password,
      role: 'User',
      username: req.body.username,
    })
    .then(user => res.status(201).send({ message: 'Succesfully registered', user }))
    .catch(error => res.status(201).send(error.message));

module.exports = {
  signup,
};
