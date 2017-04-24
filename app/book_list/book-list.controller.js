angular.module("library")
.controller("bookListController", function ($scope, bookService) {
    $scope.mensaje = "bookListController";
    bookService.getAll().then(function (books) {
        $scope.books = books;
    });
});