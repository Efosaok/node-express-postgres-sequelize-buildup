// import necessary controller modules
const AdminController = require('../controllers').AdminController;
const UserController = require('../controllers').UserController;

module.exports = (router) => {
  router.get('/api', (req, res) => {
    res.send({ message: 'Hello,It is my Api' });
  });

  // route to signup an Admin
  router.post('/api/v1/admin/signup', AdminController.signup);
  router.post('/api/v1/users/signup', UserController.signup);
  router.post('/api/v1/admin/meals', AdminController.Addmeal);
};
