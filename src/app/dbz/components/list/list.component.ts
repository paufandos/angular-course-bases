import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter<string>();

  emitDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteCharacter.emit(id)
  }
}
