import { Injectable } from '@angular/core';

import {ACTORS} from '../dao/dACTORS';
import {CHARACTERS} from '../dao/dCHARACTERS';
import {CHARACTERSACTORS} from '../dao/dCHARACTERSACTORS';
import {MOVIES} from '../dao/dMOVIES';

@Injectable({
  providedIn: 'root'
})
export class DataExplorerService {

  constructor() { }

  getTable(pChoice: string): any {
    switch (pChoice) {
      case 'ACTORS':
        return ACTORS;
        break;
      case 'CHARACTERS':
          return CHARACTERS;
        break;
      case 'CHARACTERSACORS':
        return CHARACTERSACTORS;
      case 'MOVIES':
        return MOVIES;
      default:
        return [];
    }
  }
 
}
