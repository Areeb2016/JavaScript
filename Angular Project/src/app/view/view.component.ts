import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public events;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this._data.doGET().subscribe(
            data => { this.events = data},
            err => console.error(err),
            () => console.log('done loading Events')
        );
      
  }
}
