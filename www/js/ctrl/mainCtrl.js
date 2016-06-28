/**
 * Created by donghoon on 2016. 6. 26..
 */
angular.module('strt.ctrls.mainCtrl', [])

  .controller('MainCtrl', function ($scope) {

    $scope.images = [];

    $scope.loadImages = function () {
      for (var i = 0; i < 12; i++) {
        $scope.images.push({id: i, src: "img/placehold100x100.png"})
      }
    };

  });
