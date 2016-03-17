var phonecatServices = angular.module('dashboardServices', ['ngResource']);

phonecatServices.factory('Transactions', ['$resource',
  function($resource){
    console.log($resource);
    return "asd";
    /*return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });*/
  }]);
