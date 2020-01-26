import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewras',
  templateUrl: './viewras.component.html',
  styleUrls: ['./viewras.component.css']
})
export class ViewrasComponent implements OnInit {
  public ieeeras;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getVolunteers();
  }
  getVolunteers(){
    this._data.doGETras().subscribe(
            data => { this.ieeeras = data},
            err => console.error(err),
            () => console.log('done loading Volunteers')
        );
      
  }
}
