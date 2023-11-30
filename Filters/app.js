(function(){
    'use strict'

    var numberArray = [1, 2,3, 4, 5, 6, 7, 8, 9, 10]
    
    var filterNumberArray = numberArray.filter(function(value){
        return value > 5;
    });

    console.log ("Filtered number array: ", filterNumberArray )
    
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('customLove', CustomLovesFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter){
        $scope.sayMessage = function(){
            var msg = "Frank likes to eat Pizza at night"
            return msg;
        };

        $scope.sayLovesMessage = function(){
            var msg = "Frank likes to eat Pizza at night";
            msg = lovesFilter(msg);
            return msg;
        }

    };

    function LovesFilter(){
        return function (input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function CustomLovesFilter(){
        return function (input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }
})();