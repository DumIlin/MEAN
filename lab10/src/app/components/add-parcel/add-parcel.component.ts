import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "src/app/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }
  senderId: any = ''
  address : string = ''
  weight: number = 0
  fragile: boolean = false
  
  onSelectParcel(item: any) {
    this.senderId = item.senderId;
    this.address = item.address;
    this.weight = item.weight;
    this.fragile = item.fragile
  }

  onAddParcel() {
    let obj = {senderId: this.senderId, address: this.address, weight: this.weight, fragile: this.fragile };
    this.dbService.addParcel(obj).subscribe(result => {
      this.router.navigate(["/listparcels"]);
    });
  }
}
