import { Component } from '@angular/core';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab8';
  db:any = [];

  sender= '';
  address= '';
  weight= 0;
  cost= 0;
  fragile= false



  newItem() {
      //this.db.push(this.parcel)
      this.db.push({_id: uuidv4(), sender: this.sender, address: this.address,weight: this.weight, cost: this.cost, fragile: this.fragile})
      let counter = 0
      for (let i = 0; i < this.db.length; i ++){
          if(this.db[i].weight == 0){
          counter += 1   
        }
        return counter
    }
}

  deleteParcel_Zero() {  
    for (let i = 0; i < this.db.length;i ++){
      while (this.db[i].weight == 0){
        this.db.splice(i,1);
      }

    }   
  }

  deleteRow(i: number) {  
      this.db.splice(i,1);
    }

}   
  

