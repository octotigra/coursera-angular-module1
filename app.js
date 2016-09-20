(function() {
    "use strict";

    angular.module('myApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        var MAX = 3;

        var success = 'Enjoy!';
        var error = 'Too much!';
        var noDataError = 'Please enter data first.';

        $scope.result;
        $scope.check = function () {
            var itemsQuantity = getItemsNumber($scope.items);

            if (itemsQuantity <= MAX && itemsQuantity > 0) {
                $scope.result = success;
            } else if (itemsQuantity > MAX) {
                $scope.result = error;
            } else {
                $scope.result = noDataError;
            }
        };

        var getItemsNumber = function (itemsString) {
            if (itemsString === undefined) {
                return 0;
            }
            var arr = itemsString.split(',');
            arr = removeEmptyStrings(arr);
            console.log(arr);
            return arr.length;
        }

        var removeEmptyStrings = function(arr){
            console.log(arr);
          return arr.filter(function(value){
               return !!value;
           });
        };
    }
})();
