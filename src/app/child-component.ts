import { Input, Component } from "@angular/core";

@Component({
    selector: 'child-comp',
    template: `<p>{{counter}}</p>`
})
export class ChildComponent {
     
    counter: number = 0;
    increment() { this.counter++; }
    decrement() { this.counter--; }
}