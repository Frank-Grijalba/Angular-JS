(function(){

//'use strict' enabling certain things to just protect us from making mistakes 
'use strict'

//angular.module('nameApp', dependencies[])    
angular.module('DIApp', [])
.controller('DIController', DIController);
function DIController($scope, $filter){
    $scope.name = "fjgh";

    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase( $scope.name );
    };
}
})();