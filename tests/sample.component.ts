import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
})

export class SampleComponent {
  @Input() config: any;
  private _items!: string[]; // Non-null assertion
  public name = 'sample';

  constructor(
    private _testt = 'test', // 'no-underscore-dangle'
  ) {
    const _test = parseInt('42', 7); // 'as-needed' radix
  }

  private _test() {
    this._items = ['one', 'two', 'three'];
  }
}
