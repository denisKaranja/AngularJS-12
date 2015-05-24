'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ["$http", "$scope", function($http, $scope){
  $http.get("phones/phones.json").success(function(data){
    $scope.phones = data.splice(0, 10);
  });

  $scope.orderProp = "age";

}]);

phonecatControllers.controller("PhoneDetailCtrl", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http){
  $http.get("phones/" + $routeParams.phoneId + ".json").success(function(data){
    $scope.phone = data;
  });
}]);









