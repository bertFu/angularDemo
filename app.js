var myApp = angular.module('sntApp', ['ui.router', 'ui.bootstrap'])

myApp
    .run(function ($rootScope, $state, $cookieStore, AUTH_EVENTS, AuthService, Session) {
        // // todo 考虑是否可以放在别的地方监听
        $rootScope.$on(AUTH_EVENTS.loginSuccess, function() { // 成功登陆
            $state.go('index');
        });
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() { // 没有通过验证
            $state.go('login');
        });
        $rootScope.$on(AUTH_EVENTS.notAuthorized, function() { // 没有权限
            $state.go('index');
        });
    })
    .config(function ($httpProvider) {
        /* 获取用户拦截器，拦截请求响应，对其做出处理 */
        $httpProvider.interceptors.push(['$injector', function ($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    })
    

    
