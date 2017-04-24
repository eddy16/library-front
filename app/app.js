'use strict';

// Declare app level module which depends on views, and components
angular.module('library', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
      .when("/",{
        templateUrl:"book_list/book-list.template.html",
        controller:"bookListController"
      })
      .when("/book/:bookId",{
        templateUrl:"book/book.template.html",
        controller:"bookController"
      })
      .otherwise({redirectTo: '/'});
}]);
