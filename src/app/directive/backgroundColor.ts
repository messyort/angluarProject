import { Directive, ElementRef, Input, HostListener } from '@angular/core';
@Directive({
    selector:'[backgroundColor]'
})

export class BackgroundColorDirective{
    private el: HTMLElement;
    private _defaultColor: string = 'red'
    @Input('backgroundColor') color: string;
    @Input() set defaultColor(color:string){
        this._defaultColor = color || this._defaultColor
    }
    constructor(el:ElementRef){
        this.el = el.nativeElement;
        // el.nativeElement.style.backgroundColor = this.color
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.color||this._defaultColor);
      }
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }

      highlight(color:string){
        this.el.style.backgroundColor = color
      }
    
    
}
