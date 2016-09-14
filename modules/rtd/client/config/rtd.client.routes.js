(function () {
  'use strict';

  angular
    .module('rtd.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('rtd', {
        abstract: true,
        url: '/rtd',
        template: '<ui-view/>'
      })
      .state('rtd.list', {
        url: '',
        templateUrl: 'modules/rtd/client/views/list-rtd.client.view.html',
        controller: 'RtdListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Rtd List'
        }
      })
      .state('rtd.view', {
        url: '/:articleId',
        templateUrl: 'modules/rtd/client/views/view-article.client.view.html',
        controller: 'RtdController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        },
        data: {
          pageTitle: 'Article {{ articleResolve.title }}'
        }
      });
  }

  getArticle.$inject = ['$stateParams', 'RtdService'];

  function getArticle($stateParams, RtdService) {
    return RtdService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }
}());
