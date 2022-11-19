import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "src/app/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent implements OnInit {
  name: string = ''
  
  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddSender() {
    let obj = {name: this.name};
    this.dbService.addSender(obj).subscribe(result => {
      this.router.navigate(["/listsenders"]);
    });
  }
}
