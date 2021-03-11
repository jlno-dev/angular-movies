import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  datas: any [];
  @Input() TableName: string;

  constructor() { }

  ngOnInit() {
  }



}
