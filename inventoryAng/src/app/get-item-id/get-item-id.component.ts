import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-get-item-id',
  templateUrl: './get-item-id.component.html',
  styleUrls: ['./get-item-id.component.css']
})
export class GetItemIdComponent implements OnInit {
  public item:Item;
  public itemId:number;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  
  public resetId(data:number){
    this.item = null;
    this.itemId = null;
  }
  
  public getItem(itemId:number): void{
    this.itemService.getItem(itemId).subscribe(
      (response: Item)=>{
        this.item = response;
        this.itemId = null;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
        this.itemId = null;
        this.item = null;
       }
    )
  }

}
