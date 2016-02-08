/**
 * Created by donghoon on 2016. 2. 8..
 */
angular.module('strt.ctrls.loginCtrl', [])

  .controller('LoginCtrl', function ($scope, $http, $state, $ionicPopup, LoginSvc) {
    //variables
    $scope.kakaoLoginImg = "img/login/en/kakao_account_login_btn_large_wide_ov.png";

    //functions
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $scope.kakaoLogin = function () {
      String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
      };
      var ref = LoginSvc.kakaoLogin();
      ref.addEventListener('loadstart', function (event) {
        if ((event.url).startsWith(redirectUri)) {
          reqToken = (event.url).split("code=")[1];
          LoginSvc.getKakaoAccToken(reqToken)
            .then(function (response) {
              accToken = response.access_token;
              LoginSvc.getKakaoUserInfo(accToken)
                .then(function (response) {
                  $state.go('tab.dash');
                });
            }, function (data, status) {
              var alertPopup = $ionicPopup.alert({
                title: 'Login Fail!',
                template: "data: " + data + "event: " + event + "redirect.url: " + event.url + ", Can't get access_token, status: " + status
              });
              alertPopup.then(function () {
                $state.go('login');
              });
            });
          ref.close();
        }
      });
    };
  });
