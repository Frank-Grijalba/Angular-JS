(function(){

//'use strict' enabling certain things to just protect us from making mistakes 
'use strict'

//angular.module('nameApp', dependencies[])    
angular.module('myFirstApp', [])

//$ reserved for Angular JS
.controller('MyFirstController', function($scope){
    $scope.name = "FJGH";

    $scope.sayHello = function(){
        return "Hello World";
    };
});
})();