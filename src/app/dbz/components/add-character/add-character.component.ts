import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public character: Character = {
    name: '',
    power: 0
  }

  emitAddCharacter(): void {
    if (!this.character.name) return;
    this.onNewCharacter.emit(this.character)
    this.character = { name: '', power: 0 }
  }

}
