import { Utils } from "./../utils.js";
export var Status;
(function (Status) {
    Status["Uncompleted"] = "uncompleted";
    Status["Completed"] = "completed";
})(Status || (Status = {}));
export class Task {
    //props:
    description;
    status = Status.Uncompleted;
    timeStamp = Utils.currentDateString();
    //constructor:
    constructor(description, status = Status.Uncompleted) {
        this.description = description;
        if (status) {
            this.status = status;
        }
    }
    //methods
    toString() {
        return `description: ${this.description} status: ${this.status}`;
    }
}
