import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addembs',
  templateUrl: './addembs.component.html',
  styleUrls: ['./addembs.component.css']
})
export class AddembsComponent implements OnInit {

  constructor(private _data:DataService) { }
  name: string;
  email: string;
  mobile: number;
  semester: number;
  dep: string;
  ngOnInit() {
  }
  saveval()
  {
    var ret;
    let ev={
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      semester: this.semester,
      dep: this.dep
    };
  this._data.doPOSTembs(ev).subscribe(
    data => { ret = data},
    err => console.error(err),
    () => console.log('done loading Volunteers')
  
    );
    alert("Volunteer Added Successfully");
    this.name='';
    this.email='';
    this.mobile;
    this.semester;
    this.dep='';
  }
}
