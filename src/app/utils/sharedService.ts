export class SharedService {
    list: String[] = [];
    append(str:String){
        this.list.push(str)
    }
}