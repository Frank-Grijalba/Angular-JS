(function(){

//'use strict' enabling certain things to just protect us from making mistakes 
'use strict'

//angular.module('nameApp', dependencies[])    
var shoppingList1 = [
    "Guevos", "Aseite", "Zal", "Cevoya Larga", "Horegano", "Hajo"
];

var shoppingList2 = [
    {name: "Milk", quantity: 2},
    {name: "Eggs", quantity: 12},
    {name: "Bread", quantity: 1},
    {name: "Butter", quantity: 1},
    {name: "Cheese", quantity: 1},
    {name: "Apples", quantity: 3},
    {name: "Oranges", quantity: 2},
    {name: "Bananas", quantity: 1},
    {name: "Potatoes", quantity: 2},
    {name: "Onions", quantity: 1}
  ];
//$ reserved for Angular JS
angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);
ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope){
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addItem = function(){
        var newItem = {
            name: $scope.name,
            quantity: $scope.quantity
        }
        $scope.shoppingList2.push(newItem);
    };

}})();