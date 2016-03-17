var dashboardControllers = angular.module('dashboardControllers', []);

dashboardControllers.controller('DashboardCtrl', function ($scope) {
  console.log("a");
});

dashboardControllers.controller('TransactionsCtrl', ['$scope', '$routeParams', 'Transactions', function ($scope, $routeParams, Transactions) {
  console.log(Transactions);
}]);
