import { Component } from '@angular/core';
import {SharedService} from '../../utils/sharedService';

@Component({
    selector: 'page-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    constructor(private _sharedService: SharedService){}
    doClick(){
        console.log(this._sharedService.list)
    }
}