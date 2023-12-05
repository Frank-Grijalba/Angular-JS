(function () {
  "use strict";

  angular
    .module("MenuCategoriesApp", [])
    .controller("MenuCategoriesController", MenuCategoriesController)
    .service("MenuCategoriesService", MenuCategoriesService);

  MenuCategoriesController.$inject = ["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();

    promise
      .then(function (response) {
        menu.categories = response.data.categories;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

    menu.logMenuItems = function (categoryName) {
      var promise = MenuCategoriesService.getMenuForCategory(categoryName);

      promise
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }

  MenuCategoriesService.$inject = ["$http"];
  function MenuCategoriesService($http) {
    var service = this;

    service.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/categories.php",
      });
      return response;
    };

    service.getMenuForCategory = function (categoryName){
      var response = $http({
        method: "GET",
        url: ("https://www.themealdb.com/api/json/v1/1/filter.php"),
        params: {
          c: categoryName
        }
      });
      return response;
    }
  }
})();
