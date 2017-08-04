/**
 * Created by xin12 on 2017/2/21.
 */
var myAppModule = angular.module('myApp', []);
// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
    return function(name) {
        return 'Hello, ' + name + '!';
    };
});