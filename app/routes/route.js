var admin = require('../controllers/admin.ctrl');
var client = require('../controllers/client.ctrl');
var express = require('express');
var Route = express.Router();

// module.exports = function(app) {
//   // route admin
//   Route
//     .get('/api/admin', admin.view)
//     .post('/api/admin', admin.add)
//     .put('/api/admin/:user_id', admin.update)
//     .delete('/api/admin/:user_id', admin.delete)
//
//   // route client
//   Route
//     .get('/api/client', client.list)
// }

module.exports = function(app) {
  app.route('/api/admin')
    .get(admin.view)
    .post(admin.add)

  app.route('/api/admin/:user_id')
    .put(admin.update)
    .delete(admin.delete)

  app.route('/api/client')
    .get(client.list)
};
