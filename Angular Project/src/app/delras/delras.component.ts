import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delras',
  templateUrl: './delras.component.html',
  styleUrls: ['./delras.component.css']
})
export class DelrasComponent implements OnInit {
public ieeeras;
name:string;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getVolunteers();
  }
  getVolunteers(){
    this.name='';
    this._data.doGETras().subscribe(
            data => { this.ieeeras = data},
            err => console.error(err),
            () => console.log('Done loading Volunteers')
        );
      
  }
  delval()
  {
  var ret;
    this._data.doDELETEras(this.name).subscribe(
      data => { ret = data},
      err => console.error(err),
      () => console.log('Done loading Volunteers')
      );
      alert("Volunteer Deleted Successfully");
      this.getVolunteers();
  }
}
