import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "src/app/database.service";

@Component({
  selector: 'app-list-parcels',
  templateUrl: './list-parcels.component.html',
  styleUrls: ['./list-parcels.component.css']
})
export class ListParcelsComponent implements OnInit {
  parcelsDB: any[] = []

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.onGetParcels()
  }
  
  onGetParcels(){
    this.dbService.getParcels().subscribe((data: any) => {
      this.parcelsDB = data;
    }) 
} 

}
