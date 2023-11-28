(function(){

//'use strict' enabling certain things to just protect us from making mistakes 
'use strict'

//angular.module('nameApp', dependencies[])    
angular.module('NameCalculator', [])

//$ reserved for Angular JS
.controller('NameCalculatorController', function($scope){
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function(){
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string){
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++){
            totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;
    }
    
});
})();