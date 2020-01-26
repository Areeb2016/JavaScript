import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewembs',
  templateUrl: './viewembs.component.html',
  styleUrls: ['./viewembs.component.css']
})
export class ViewembsComponent implements OnInit {
  public ieeeembs;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getVolunteers();
  }
  getVolunteers(){
    this._data.doGETembs().subscribe(
            data => { this.ieeeembs = data},
            err => console.error(err),
            () => console.log('done loading Volunteers')
        );
      
  }
}
