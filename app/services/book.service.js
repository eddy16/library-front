angular.module('library')
.service('bookService',['$http','urlConstants', function ($http,urlConstants) {
    this.getAll = function () {
        return $http.get(urlConstants.bookApi)
            .then(function (response) {
               return response.data;
            },function (httpError) {
                throw httpError.status + ' : ' + httpError.data;
            });
    }

    this.getBook = function (bookId) {
        return $http.get(urlConstants.bookApi + '/' + bookId)
            .then(function (response) {
                return response.data;
            }, function (httpError) {
               throw httpError.status + ' : ' + httpError.data;
            });
    }
}]);