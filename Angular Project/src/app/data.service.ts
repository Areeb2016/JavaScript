import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  doGET(){
    let url="http://localhost:3000/events";
    return this.http.get(url);
  }
  doGETS(name){
    let ename=name
    let url="http://localhost:3000/events"+ename;
    return this.http.get(url);
  }
  doPOST(ev){
      let body=JSON.stringify(ev);
    let url="http://localhost:3000/events/add";
    return this.http.post(url,body,httpOptions);
  }
  doUPDATE(body){
    let name=body.name;
    let chapter=body.chapter;
    let description=body.description;
    let date=body.date;
    let body1=JSON.stringify(body);
    let url="http://localhost:3000/events/edit";
  return this.http.put(url,body1,httpOptions);
}
  doDELETE(name){
    let ename=name;
  let url="http://localhost:3000/events/del/"+ename;
 return this.http.delete(url,httpOptions);
}
doGETcs(){
  let url="http://localhost:3000/ieeecs";
  return this.http.get(url);
}
doGETScs(name){
  let ename=name
  let url="http://localhost:3000/ieeecs"+ename;
  return this.http.get(url);
}
doPOSTcs(cs){
    let body=JSON.stringify(cs);
  let url="http://localhost:3000/ieeecs/addcs";
  return this.http.post(url,body,httpOptions);
}
doUPDATEcs(body){
  let id=body._id;
  let name=body.name;
  let desig=body.designation;
  let body1=JSON.stringify(body);
  let url="http://localhost:3000/ieeecs/editcs";
return this.http.put(url,body1,httpOptions);
}
doDELETEcs(name){
  let ename=name;
let url="http://localhost:3000/ieeecs/delcs/"+ename;
return this.http.delete(url,httpOptions);
}
doGETembs(){
  let url="http://localhost:3000/ieeeembs";
  return this.http.get(url);
}
doGETSembs(name){
  let ename=name
  let url="http://localhost:3000/ieeeembs/"+ename;
  return this.http.get(url);
}
doPOSTembs(embs){
    let body=JSON.stringify(embs);
  let url="http://localhost:3000/ieeeembs/addembs";
  return this.http.post(url,body,httpOptions);
}
doUPDATEembs(body){
  let id=body._id;
  let name=body.name;
  let desig=body.designation;
  let body1=JSON.stringify(body);
  let url="http://localhost:3000/ieeeembs/editembs";
return this.http.put(url,body1,httpOptions);
}
doDELETEembs(name){
  let ename=name;
let url="http://localhost:3000/ieeeembs/delembs/"+ename;
return this.http.delete(url,httpOptions);
}
doGETras(){
  let url="http://localhost:3000/ieeeras";
  return this.http.get(url);
}
doGETSras(name){
  let ename=name
  let url="http://localhost:3000/ieeeras"+ename;
  return this.http.get(url);
}
doPOSTras(ras){
    let body=JSON.stringify(ras);
  let url="http://localhost:3000/ieeeras/addras";
  return this.http.post(url,body,httpOptions);
}
doUPDATEras(body){
  let id=body._id;
  let name=body.name;
  let desig=body.designation;
  let body1=JSON.stringify(body);
  let url="http://localhost:3000/ieeeras/editras";
return this.http.put(url,body1,httpOptions);
}
doDELETEras(name){
  let ename=name;
let url="http://localhost:3000/ieeeras/delras/"+ename;
return this.http.delete(url,httpOptions);
}
}
