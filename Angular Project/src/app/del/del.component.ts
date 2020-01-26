import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {
public events;
name:string;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getEvent();
  }
  getEvent(){
    this.name='';
    this._data.doGET().subscribe(
            data => { this.events = data},
            err => console.error(err),
            () => console.log('Done loading Events')
        );
      
  }
  delval()
  {
  var ret;
    this._data.doDELETE(this.name).subscribe(
      data => { ret = data},
      err => console.error(err),
      () => console.log('Done loading Events')
      );
      alert("Event Deleted Successfully");
      this.getEvent();
  }
}
