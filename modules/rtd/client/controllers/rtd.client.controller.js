(function () {
  'use strict';

  angular
    .module('rtd')
    .controller('RtdController', RtdController);

  RtdController.$inject = ['$scope', 'articleResolve', 'Authentication'];

  function RtdController($scope, article, Authentication) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;
    vm.error = null;

  }
}());
