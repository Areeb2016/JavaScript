import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editras',
  templateUrl: './editras.component.html',
  styleUrls: ['./editras.component.css']
})
export class EditrasComponent implements OnInit {
  public ieeeras;
  public ras;
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
    
        this._data.doGETras().subscribe(
                data => { this.ieeeras = data},
                err => console.error(err),
                () => console.log('done loading Volunteers')
            );
          
      }
      
      update()
    {
      
      this._data.doGETSras(this.name).subscribe(
        data => { this.ras = data},
        err => console.error(err),
        () => console.log('done loading Volunteers')
          );
          this.name=this.ras.name;
          this.email=this.ras.email;
          this.mobile=this.ras.mobile;
          this.semester=this.ras.semester;
          this.dep=this.ras.dep;
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
      this._data.doUPDATEras(body).subscribe(
        data => { ret = data},
        err => console.error(err),
        () => console.log('done loading Volunteers')
          );
        alert("Volunteer Updated Successfully");
          this.getVolunteers();
      }

}
