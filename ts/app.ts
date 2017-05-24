declare var angular: any;

interface IBook{
    fullName: string;
    phoneNumber: string;
}

class MyController {

    public list: IBook[] = [];

    public selectedItem: IBook;

    public nwItem: IBook;

    constructor(){
        this.clear();
    }

    public select(item?: IBook): void {
        this.selectedItem = item;

        this.nwItem.fullName = this.selectedItem.fullName;
        this.nwItem.phoneNumber = this.selectedItem.phoneNumber; 
    }

    public create(): void {
        this.list.push({
            fullName: this.nwItem.fullName,
            phoneNumber: this.nwItem.phoneNumber
        });
        
        this.clear();
    }

    public delete(index: number): void {
        this.list.splice(index, 1);
        this.clear();
    }

    public edit(): void {
        this.selectedItem.fullName = this.nwItem.fullName;
        this.selectedItem.phoneNumber = this.nwItem.phoneNumber;
        this.clear();
    }

    private clear(): void {
        this.nwItem = {
            fullName: "",
            phoneNumber: ""
        };
    }

}

angular.
    module('myMdl', []).
    controller('myCtrl', MyController);
