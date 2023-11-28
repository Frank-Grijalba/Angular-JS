(function(){

//'use strict' enabling certain things to just protect us from making mistakes 
'use strict'

//angular.module('nameApp', dependencies[])    
angular.module('DIApp', []).controller('DIController', DIController);
// .controller('DIController', [$scope, $filter, DIController]);

//The next line is a way to inject dependencies in each function. In exercise to minify the code with functionalities. 
DIController.$inject = ['$scope', '$filter']

function DIController($scope, $filter){
    $scope.name = "fjgh";

    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase( $scope.name );
    };
}
})();

// with minifier https://www.toptal.com/developers/javascript-minifier

//angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function e(n,o){n.name="fjgh",n.upper=function(){var e=o("uppercase");n.name=e(n.name)}}]);