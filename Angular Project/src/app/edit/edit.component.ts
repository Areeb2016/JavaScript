import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public events;
  public ev;
  name: string;
  chapter: string;
  description: string;
  date: number;
  constructor(private _data:DataService) { }
  
  ngOnInit() {
    this.getEvents();
    this.update();
    }
      getEvents(){
    
        this._data.doGET().subscribe(
                data => { this.events = data},
                err => console.error(err),
                () => console.log('done loading Events')
            );
          
      }
      
      update()
    {
      
      this._data.doGETS(this.name).subscribe(
        data => { this.ev = data},
        err => console.error(err),
        () => console.log('done loading Events')
          );
          this.name=this.ev.name;
          this.chapter=this.ev.chapter;
          this.description=this.ev.description;
          this.date=this.ev.date;
          //alert(this.emp._id);
    
        }
        editval()
        {
      let ret;
      let body:{ name: string; chapter:string; description:string; date:number} = { 
        name: this.name,
        description:this.description,
        chapter:this.chapter,
        date:this.date};
      this._data.doUPDATE(body).subscribe(
        data => { ret = data},
        err => console.error(err),
        () => console.log('done loading Events')
          );
        alert("Event Updated Successfully");
          this.getEvents();
      }

}
