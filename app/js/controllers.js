'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
  ]);

phonecatApp.controller('PhoneListCtrl', ["$http", "$scope", function($http, $scope){
  $http.get("phones/phones.json").success(function(data){
    $scope.phones = data.splice(0, 10);
  });

  $scope.orderProp = "age";

}]);

phonecatApp.controller("PhoneDetailCtrl", ["$scope", "$routeParams", function($scope, $routeParams){
  $scope.phoneId = $routeParams.phoneId;
}]);









