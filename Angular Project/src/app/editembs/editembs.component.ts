import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editembs',
  templateUrl: './editembs.component.html',
  styleUrls: ['./editembs.component.css']
})
export class EditembsComponent implements OnInit {
  public ieeeembs;
  public embs;
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
    
        this._data.doGETembs().subscribe(
                data => { this.ieeeembs = data},
                err => console.error(err),
                () => console.log('done loading Volunteers')
            );
          
      }
      
      update()
    {
      
      this._data.doGETSembs(this.name).subscribe(
        data => { this.embs = data},
        err => console.error(err),
        () => console.log('done loading Volunteers')
          );
          this.name=this.embs.name;
          this.email=this.embs.email;
          this.mobile=this.embs.mobile;
          this.semester=this.embs.semester;
          this.dep=this.embs.dep;
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
      this._data.doUPDATEembs(body).subscribe(
        data => { ret = data},
        err => console.error(err),
        () => console.log('done loading Volunteers')
          );
        alert("Volunteer Updated Successfully");
          this.getVolunteers();
      }

}
