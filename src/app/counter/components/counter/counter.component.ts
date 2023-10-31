import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>`,
})
export class CounterComponent {
  private defaultCounterValue: number = 10;
  public counter: number = this.defaultCounterValue;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = this.defaultCounterValue;
  }
}
