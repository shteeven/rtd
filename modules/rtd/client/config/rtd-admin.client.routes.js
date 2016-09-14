(function () {
  'use strict';

  angular
    .module('rtd.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.rtd', {
        abstract: true,
        url: '/rtd',
        template: '<ui-view/>'
      })
      .state('admin.rtd.list', {
        url: '',
        templateUrl: 'modules/rtd/client/views/admin/list-rtd.client.view.html',
        controller: 'RtdAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.rtd.create', {
        url: '/create',
        templateUrl: 'modules/rtd/client/views/admin/form-article.client.view.html',
        controller: 'RtdAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          articleResolve: newArticle
        }
      })
      .state('admin.rtd.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/rtd/client/views/admin/form-article.client.view.html',
        controller: 'RtdAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          articleResolve: getArticle
        }
      });
  }

  getArticle.$inject = ['$stateParams', 'RtdService'];

  function getArticle($stateParams, RtdService) {
    return RtdService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }

  newArticle.$inject = ['RtdService'];

  function newArticle(RtdService) {
    return new RtdService();
  }
}());
