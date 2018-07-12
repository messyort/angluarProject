import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: 'demo-item',
    templateUrl: './demoItem.component.html',
    styleUrls: ['demoItem.component.css']
})

export class DemoItemComponent implements OnInit{
    @Input() contact: any = {};
    @Output() emitter = new EventEmitter();
    constructor(){}
    ngOnInit(){}
    goDetail(id: number){
        this.emitter.emit(id)
    }
}