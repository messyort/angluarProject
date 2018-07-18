import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

let _contacts;
const CONTACT_URL = './assets/contacts.json';
@Injectable()
export class DemoService{
    constructor(private _http: HttpClient){}

    getList() {

        return this._http.request('get', CONTACT_URL).catch(err => 
            this.handleError(err)
        )
  
    }

    handleError(err: HttpErrorResponse) {
        let errMsg;
        if (err.error instanceof Error) {
          // 客户端错误或者网络异常，即连接还没传达到服务端
          errMsg = err.error.message;
        } else if (err.status) {
          // 服务端已经接收到请求，但返回非 200 的 HTTP 状态码
          errMsg = `${err.status} - ${err.statusText}，详细错误：${err.error}`;
        }
        // console.error("errMsg:"+ errMsg); // 打印到控制台
        return Observable.throw(err.statusText);
      }
}