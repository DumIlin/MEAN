import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  
  getParcels(){
    return this.http.get("/parcel")
  }

  addParcel(data:any){
    return this.http.put( "/sender/parcel", data, httpOptions)
  }
  getSenders(){
    return this.http.get("/sender")
  }

  addSender(data:any){
    return this.http.post( "/sender", data, httpOptions)
  }

  delSender(id:any){
    let url = "/sender/" + id
    return this.http.delete(url, httpOptions);
  }

}
