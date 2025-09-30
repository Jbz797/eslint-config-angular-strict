import { Component, OnInit, Input } from '@angular/core';

// Test component with intentional violations to validate ESLint rules

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'] // Should trigger consistent-component-styles
})
export class SampleComponent implements OnInit {
  @Input() config: any; // Should trigger no-explicit-any warning
  private _items!: string[]; // Non-null assertion
  public name = 'sample';

  constructor() {} // Empty constructor should trigger warning

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._items = this.config?.items || [];
  }

  // Method should be after getter based on member-ordering
  processItems() {
    return this._items.map(item => item.toUpperCase()); // Missing arrow function parens
  }

  // Getter should be before methods
  get itemCount(): number {
    return this._items?.length || 0;
  }
}