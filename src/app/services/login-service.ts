import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

export class LoginService {
    constructor(private _http: Http){

    }
    // request(args: RequestOptions): Observable<any> {
    //     args.headers.append("Content-Type","application/json")
    //     return this._http.request(new Request(args)).map((res: Response) => this.handleResponse(res)).catch((error: any) => this.handleError(error))
    // }

    loginRequest(data:any){
        let header = new Headers({
            "Content-Type": "application/json",
        })
        let options = new RequestOptions({headers:header})
        let url = `https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${data.username}&passwd=${data.password}`
        return this._http.get(url,options)
    }
}