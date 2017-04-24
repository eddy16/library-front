angular.module("library")
.controller("bookController", function ($scope, $routeParams, bookService) {
    var bookId = $routeParams.bookId;

    bookService.getBook(bookId)
        .then(function (book) {
           $scope.name   = book.name;
           $scope.author = book.author;
        });

});