import {Component,OnInit} from '@angular/core';
import {DemoService} from './demo.service';
import {SharedService} from '../../utils/sharedService';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['../login/login.component.scss','./demo.component.css']
})

export class DemoComponent implements OnInit {
    contacts: {};
    isShowList: Boolean = true;
    inputVal: string;
    list:["zhangsan","lisi"]
    constructor(
        private _demoService: DemoService,
        private _sharedService: SharedService
    ){}
    ngOnInit(){
        // this._demoService.getList().subscribe(res => {
        //     this.contacts = res
        //     this.isShowList = true
        //     console.log(this.contacts)
        // }, err => {
        //     this.contacts = err
        //     this.isShowList = false
        // })    
        
        this._sharedService.list = this.list
    }
    emitterfunc(res: any){
        console.log(res)
    }
    doClick(){
        if(this.inputVal!==null){
            this._sharedService.append(this.inputVal)
        }
        
    }
}