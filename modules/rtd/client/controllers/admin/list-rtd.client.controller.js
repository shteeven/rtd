(function () {
  'use strict';

  angular
    .module('rtd.admin')
    .controller('RtdAdminListController', RtdAdminListController);

  RtdAdminListController.$inject = ['RtdService'];

  function RtdAdminListController(RtdService) {
    var vm = this;

    vm.rtd = RtdService.query();
  }
}());
