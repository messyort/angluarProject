import { Directive, ElementRef, Input,TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
    selector:'[unless]'
})

export class unlessDirective {
    @Input('unless') set condition(newCondition:Boolean){
        if(!newCondition){
            this._viewContainer.createEmbeddedView(this._templateRef)
        }else{
            this._viewContainer.clear()
        }
    };
    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainer: ViewContainerRef
    ){}
}