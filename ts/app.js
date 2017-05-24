var MyController = (function () {
    function MyController() {
        this.list = [];
        this.clear();
    }
    MyController.prototype.select = function (item) {
        this.selectedItem = item;
        this.nwItem.fullName = this.selectedItem.fullName;
        this.nwItem.phoneNumber = this.selectedItem.phoneNumber;
    };
    MyController.prototype.create = function () {
        this.list.push({
            fullName: this.nwItem.fullName,
            phoneNumber: this.nwItem.phoneNumber
        });
        this.clear();
    };
    MyController.prototype["delete"] = function (index) {
        this.list.splice(index, 1);
        this.clear();
    };
    MyController.prototype.edit = function () {
        this.selectedItem.fullName = this.nwItem.fullName;
        this.selectedItem.phoneNumber = this.nwItem.phoneNumber;
        this.clear();
    };
    MyController.prototype.clear = function () {
        this.nwItem = {
            fullName: "",
            phoneNumber: ""
        };
    };
    return MyController;
}());
angular.
    module('myMdl', []).
    controller('myCtrl', MyController);
