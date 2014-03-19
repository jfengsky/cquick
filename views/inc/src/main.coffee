angular.element(document).ready ->
  angular.module('myApp', []).controller('fileListcontrol',[
    '$scope'
    '$http'
    ($scope, $http) ->
      $http(
        method: 'get'
        url: './pageinfo'
        catche: false
      ).success (data, status) ->
        $scope.filelist = data
        console.log $scope
        return
      return
  ]);

  angular.bootstrap(document, ['myApp']);

  return