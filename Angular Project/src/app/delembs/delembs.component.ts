import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delembs',
  templateUrl: './delembs.component.html',
  styleUrls: ['./delembs.component.css']
})
export class DelembsComponent implements OnInit {
public ieeeembs;
name:string;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getVolunteers();
  }
  getVolunteers(){
    this.name='';
    this._data.doGETembs().subscribe(
            data => { this.ieeeembs = data},
            err => console.error(err),
            () => console.log('Done loading Volunteers')
        );
      
  }
  delval()
  {
  var ret;
    this._data.doDELETEembs(this.name).subscribe(
      data => { ret = data},
      err => console.error(err),
      () => console.log('Done loading Volunteers')
      );
      alert("Volunteer Deleted Successfully");
      this.getVolunteers();
  }
}
