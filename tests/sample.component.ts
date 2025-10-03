import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
})

export class SampleComponent {
  @Input() config: any;
  private _items!: string[]; // Non-null assertion
  public name = 'sample';

  constructor() {
    const obj1 = {
      a: 1,
      C: 4,
      b: 2,
      c: 3,
    };
  }
}
