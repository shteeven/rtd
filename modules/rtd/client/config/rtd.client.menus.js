(function () {
  'use strict';

  angular
    .module('rtd')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Rtd',
      state: 'rtd',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'rtd', {
      title: 'List Rtd',
      state: 'rtd.list',
      roles: ['*']
    });
  }
}());
