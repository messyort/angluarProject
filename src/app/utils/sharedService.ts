// import { Injectable } from "../../../node_modules/@angular/core";

// @Injectable()
export class SharedService {
    list: String[] = [];
    append(str:String){
        this.list.push(str)
    }
}