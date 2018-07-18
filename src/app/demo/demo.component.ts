import {Component,OnInit} from '@angular/core';
import {DemoService} from './demo.service';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
    contacts: {};
    isShowList: Boolean = true;
    constructor(private _demoService: DemoService){}
    ngOnInit(){
        this._demoService.getList().subscribe(res => {
            this.contacts = res
            this.isShowList = true
            console.log(this.contacts)
        }, err => {
            this.contacts = err
            this.isShowList = false
        })       
    }
    emitterfunc(res: any){
        console.log(res)
    }
}