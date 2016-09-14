(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', '$http'];

  function HomeController($scope, $state, $http) {
    var vm = this;

    vm.from = '';
    vm.to = '';
    vm.isRoute = false;

    var url = '/api/routes';

    vm.getRoute = function () {
      console.log('fired');
      vm.isRoute = true;
      // $http.get({
      //   url: url,
      //   method: 'GET',
      //   params: {from: vm.from, to: vm.to}
      // }).then(function (data) {
      //   vm.results = data.data;
      //   vm.isRoute = true;
      // }, function (error) {
      //   console.log(error);
      // });

    };
  }
}());
