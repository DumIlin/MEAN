import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "src/app/database.service";

@Component({
  selector: 'app-list-senders',
  templateUrl: './list-senders.component.html',
  styleUrls: ['./list-senders.component.css']
})
export class ListSendersComponent implements OnInit {
  sendersDB: any[] = []

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.onGetSenders()
  }

  onGetSenders(){
    this.dbService.getSenders().subscribe((data: any) => {
      this.sendersDB = data;
    })    
  }
}
