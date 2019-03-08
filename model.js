
let masterList = new AllLists();

function AllLists() {
    this.collection = [];
    this.add = function(listName) {
        this.collection.push(new SingleList(listName));
    };
}

function SingleList(name) {
    this.name = name;
    this.collection = [];
    this.add = function (itemName, isCompleted) {
        this.collection.push(new Item(itemName, isCompleted));
    }
}

function Item(name, completed = false) {
    this.name = name;
    this.completed = completed;
}