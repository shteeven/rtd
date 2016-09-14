(function (app) {
  'use strict';

  app.registerModule('rtd', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('rtd.admin', ['core.admin']);
  app.registerModule('rtd.admin.routes', ['core.admin.routes']);
  app.registerModule('rtd.services');
  app.registerModule('rtd.routes', ['ui.router', 'core.routes', 'rtd.services']);
}(ApplicationConfiguration));
