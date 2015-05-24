'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ["$http", "$scope", function($http, $scope){
  $http.get("phones/phones.json").success(function(data){
    $scope.phones = data.splice(0, 10);
  });

  $scope.orderProp = "age";

}]);