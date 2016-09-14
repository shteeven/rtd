(function () {
  'use strict';

  angular
    .module('rtd')
    .controller('RtdListController', RtdListController);

  RtdListController.$inject = ['RtdService'];

  function RtdListController(RtdService) {
    var vm = this;

    vm.rtd = RtdService.query();
  }
}());
