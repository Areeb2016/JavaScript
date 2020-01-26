import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _data:DataService) { }
  name: string;
  chapter: string;
  description: string;
  date: number;
  ngOnInit() {
  }
  saveval()
  {
    var ret;
    let ev={
      name: this.name,
      chapter: this.chapter,
      description: this.description,
      date: this.date
    };
  this._data.doPOST(ev).subscribe(
    data => { ret = data},
    err => console.error(err),
    () => console.log('done loading Events')
  
    );
    alert("Event Added Successfully");
    this.name='';
    this.chapter='';
    this.description='';
    this.date;
  }
}
