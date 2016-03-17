var dashboardApp = angular.module('dashboardApp', [
  'ngRoute',
  'dashboardControllers',
  'dashboardServices'
]);

dashboardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: '/partials/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      when('/reports', {
        templateUrl: '/partials/reports.html',
        controller: 'ReportsCtrl'
      }).
      when('/sales', {
        templateUrl: '/partials/sales.html',
        controller: 'SalesCtrl'
      }).
      when('/schedule', {
        templateUrl: '/partials/schedule.html',
        controller: 'ScheduleCtrl'
      }).
      when('/transactions', {
        templateUrl: '/partials/transactions.html',
        controller: 'TransactionsCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);
