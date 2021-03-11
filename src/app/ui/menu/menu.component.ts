import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  TableName: string;

  constructor() { }

  ngOnInit() {
  }
  getTableName (): string {
    return this.TableName;
  }

  onClickMovies() {
    this.onClick('MOVIES');
  }

  onClickActors() {
    this.onClick('ACTORS');
  }
  
  onClickCharacters() {
    this.onClick('CHARACTERS');
  }

  onClick(pNom: string) {
    switch (pNom) {
      case 'MOVIES':
        this.TableName='MOVIES';
        break;
      case 'ACTORS':
        this.TableName='ACTORS';
        break;
      case 'CHARACTERS':
        this.TableName='CHARACTERS';
        break;
      default:
        break;
    }

  }
}
