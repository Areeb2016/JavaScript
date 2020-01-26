import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editcs',
  templateUrl: './editcs.component.html',
  styleUrls: ['./editcs.component.css']
})
export class EditcsComponent implements OnInit {
  public ieeecs;
  public cs;
  name: string;
  email: string;
  mobile: number;
  semester: number;
  dep:string;
  constructor(private _data:DataService) { }
  
  ngOnInit() {
    this.getVolunteers();
    this.update();
    }
      getVolunteers(){
    
        this._data.doGETcs().subscribe(
                data => { this.ieeecs = data},
                err => console.error(err),
                () => console.log('done loading Volunteers')
            );
          
      }
      
      update()
    {
      
      this._data.doGETScs(this.name).subscribe(
        data => { this.cs = data},
        err => console.error(err),
        () => console.log('done loading Volunteers')
          );
          this.name=this.cs.name;
          this.email=this.cs.email;
          this.mobile=this.cs.mobile;
          this.semester=this.cs.semester;
          this.dep=this.cs.dep;
          //alert(this.emp._id);
    
        }
        editval()
        {
      let ret;
      let body:{ name: string; email:string; mobile:number; semester:number; dep:string} = { 
        name: this.name,
        email:this.email,
        mobile:this.mobile,
        semester:this.semester,
        dep:this.dep};
      this._data.doUPDATEcs(body).subscribe(
        data => { ret = data},
        err => console.error(err),
        () => console.log('done loading Volunteers')
          );
        alert("Volunteer Updated Successfully");
          this.getVolunteers();
      }

}
