import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }
  public reset(data:NgForm){
    data.reset();
  }

  public amountItemAdd(addAmountForm:NgForm): void{
    this.itemService.addAmount(addAmountForm.value).subscribe(
      (response: Item)=>{
        console.log(response);
        this.reset(addAmountForm);
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
        this.reset(addAmountForm);
      }
    )
  }

}
