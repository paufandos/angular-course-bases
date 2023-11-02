import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 900
    }
  ];

  getCharacters(): Character[] {
    return this.characters
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(deletingId: string): void {
    this.characters = this.characters.filter(({ id }) => id !== deletingId)
  }

}
