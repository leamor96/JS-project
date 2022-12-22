import { Utils } from "./../utils.js";

export enum Status {
  Uncompleted="uncompleted",
  Completed="completed",
}
export class Task {
  //props:
  description: string;
  status: Status=Status.Uncompleted;
  timeStamp = Utils.currentDateString();

  //constructor:
  constructor(description: string, status: Status = Status.Uncompleted) {
    this.description = description;
    if(status){
      this.status=status;
    }
  }
  //methods
  toString() {
    return `description: ${this.description} status: ${this.status}`;
  }
}
