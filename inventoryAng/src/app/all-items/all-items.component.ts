import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  public items:Item[];

  constructor(private itemService:ItemService) { 
    this.getItems();
  }

  ngOnInit(): void {
  }
  public getItems(): void {
    this.itemService.getItems().subscribe(
      (response: Item[]) => {
        this.items= response;
        if(this.items.length == 0)
        this.items = null;
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
      }
    );  
  }

}
