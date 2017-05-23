declare var angular: any;

interface IMyScope {
    todoList: string[];
    selectedItem: string;
    nwItem: string;
    create(): void;
    select(item: string): void;
    filter(): void;
}

angular.
    module('myTodoModule', []).
    controller('myTodoController', ['$scope', function ($scope: IMyScope) {

        // properties
        $scope.todoList = [];
        $scope.selectedItem = "";
        $scope.nwItem = "";

        // methods
        $scope.create = function () {
            $scope.todoList.push($scope.nwItem);
            $scope.nwItem = "";
        }

        $scope.select = function (item) {
            $scope.selectedItem = item;
        }

        $scope.filter = function () {
            var filtered = $scope.todoList.filter(x => x[0] == 'A');
            console.log(filtered);
        }

    }]);

