/**
 * Created by donghoon on 2016. 2. 8..
 */
angular.module('strt.ctrls.chatDetCtrl', [])

  .controller('ChatDetCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  });
