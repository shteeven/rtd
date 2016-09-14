'use strict';

/**
 * Module dependencies
 */
var rtdPolicy = require('../policies/rtd.server.policy'),
  rtd = require('../controllers/rtd.server.controller');

module.exports = function (app) {
  // Rtd collection routes
  app.route('/api/rtd').all(rtdPolicy.isAllowed)
    .get(rtd.list)
    .post(rtd.create);

  // Single article routes
  app.route('/api/rtd/:articleId').all(rtdPolicy.isAllowed)
    .get(rtd.read)
    .put(rtd.update)
    .delete(rtd.delete);

  // Finish by binding the article middleware
  app.param('articleId', rtd.articleByID);
};
