import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/item';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-remove-amount',
  templateUrl: './remove-amount.component.html',
  styleUrls: ['./remove-amount.component.css']
})
export class RemoveAmountComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  public reset(data:NgForm){
    data.reset();
  }
  
  public amountItemRemove(removeAmountForm:NgForm): void{
    this.itemService.removeAmount(removeAmountForm.value).subscribe(
      (response: Item)=>{
        console.log(response);
        this.reset(removeAmountForm);
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
        this.reset(removeAmountForm);
      }
    )
  }

}
