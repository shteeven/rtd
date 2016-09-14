(function () {
  'use strict';

  // Configuring the Rtd Admin module
  angular
    .module('rtd.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Rtd',
      state: 'admin.rtd.list'
    });
  }
}());
