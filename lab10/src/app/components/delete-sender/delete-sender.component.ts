import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "src/app/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent implements OnInit {
  senderId: any = ''

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteSender(item:{_id:any}) {
    this.dbService.delSender(this.senderId).subscribe(result => {
      this.router.navigate(["/listsenders"]);
    });
    }
}
