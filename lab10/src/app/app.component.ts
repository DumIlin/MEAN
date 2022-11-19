import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab10';

  section = 1;

  //name: string = ''
  senderId: any = ''
  address : string = ''
  weight: number = 0
  fragile: boolean = false
  parcelsDB: any[] = []
  sendersDB: any[] = []

  constructor(private dbService: DatabaseService){ }

  ngOnInit() {

  }

 /* onAddSender() {
    let obj = {name: this.name};
    this.dbService.addSender(obj).subscribe(result => {
      this.onGetSenders();
      this.changeSection(3);
    });
  }*/

  onGetSenders(){
    this.dbService.getSenders().subscribe((data: any) => {
      this.sendersDB = data;
      this.changeSection(6)
    })    
  }

  onSelectParcel(item: any) {
    this.senderId = item.senderId;
    this.address = item.address;
    this.weight = item.weight;
    this.fragile = item.fragile
  }

  onDeleteSender(item:{_id:any}) {
    this.dbService.delSender(this.senderId).subscribe(result => {
      this.onGetSenders();
      this.changeSection(4)
    });
    }

  onAddParcel() {
    let obj = {senderId: this.senderId, address: this.address, weight: this.weight, fragile: this.fragile };
    this.dbService.addParcel(obj).subscribe(result => {
    });
  }

  /*onGetParcels(){
      this.dbService.getParcels().subscribe((data: any) => {
        this.parcelsDB = data;
        this.changeSection(5)
      }) 
  }*/

 
  changeSection(sectionId : number) {
    this.section = sectionId;
    this.resetValues();
  }

  resetValues() {
    //this.name = ''
    this.senderId= ''
    this.address = ''
    this.weight = 0
    this.fragile = false
  }
}
