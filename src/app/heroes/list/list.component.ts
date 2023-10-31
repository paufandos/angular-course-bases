import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
  ];
  public deleteHero?: string;

  deleteLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
