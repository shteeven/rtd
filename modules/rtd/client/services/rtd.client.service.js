// (function () {
//   'use strict';
//
//   angular
//     .module('rtd.services')
//     .factory('RtdService', RtdService);
//
//   RtdService.$inject = ['$resource'];
//
//   function RtdService($resource) {
//     var rtd = $resource('api/rtd/', {
//       articleId: '@_id'
//     }, {
//       update: {
//         method: 'PUT'
//       }
//     });
//
//     angular.extend(Article.prototype, {
//       createOrUpdate: function () {
//         var article = this;
//         return createOrUpdate(article);
//       }
//     });
//
//     return Article;
//
//     function createOrUpdate(article) {
//       if (article._id) {
//         return article.$update(onSuccess, onError);
//       } else {
//         return article.$save(onSuccess, onError);
//       }
//
//       // Handle successful response
//       function onSuccess(article) {
//         // Any required internal processing from inside the service, goes here.
//       }
//
//       // Handle error response
//       function onError(errorResponse) {
//         var error = errorResponse.data;
//         // Handle error internally
//         handleError(error);
//       }
//     }
//
//     function handleError(error) {
//       // Log error
//       console.log(error);
//     }
//   }
// }());
