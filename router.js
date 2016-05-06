angular.module('sntApp')
    .config(function($stateProvider, $urlRouterProvider, ACCESS_LEVELS, USER_ROLES) {
        // $urlRouterProvider.otherwise('/login');
        $stateProvider
            /**
             * 登录
             */
            .state('test', {
                url: '/test',
                templateUrl: 'pages/test.html',
                // controller: 'LoginCtrl'
            })
    })