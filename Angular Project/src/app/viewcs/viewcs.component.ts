import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewcs',
  templateUrl: './viewcs.component.html',
  styleUrls: ['./viewcs.component.css']
})
export class ViewcsComponent implements OnInit {
  public ieeecs;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getVolunteers();
  }
  getVolunteers(){
    this._data.doGETcs().subscribe(
            data => { this.ieeecs = data},
            err => console.error(err),
            () => console.log('done loading Volunteers')
        );
      
  }
}
