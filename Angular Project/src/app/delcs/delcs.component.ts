import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delcs',
  templateUrl: './delcs.component.html',
  styleUrls: ['./delcs.component.css']
})
export class DelcsComponent implements OnInit {
public ieeecs;
name:string;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getVolunteers();
  }
  getVolunteers(){
    this.name='';
    this._data.doGETcs().subscribe(
            data => { this.ieeecs = data},
            err => console.error(err),
            () => console.log('Done loading Volunteers')
        );
      
  }
  delval()
  {
  var ret;
    this._data.doDELETEcs(this.name).subscribe(
      data => { ret = data},
      err => console.error(err),
      () => console.log('Done loading Volunteers')
      );
      alert("Volunteer Deleted Successfully");
      this.getVolunteers();
  }
}
