import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {
  public itemId:number;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  
  public resetId(data:number){
    this.itemId = null;
  }


  public deleteItem(itemId:number): void{
    this.itemService.delete(itemId).subscribe(
      (response: void)=>{
        this.itemId = null;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
        this.itemId = null;
      }
    )
  }

}
