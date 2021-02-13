import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  public reset(data:NgForm){
    data.reset();
  }

  public addItem(addForm: NgForm): void{
    this.itemService.addItem(addForm.value).subscribe(
      (response: Item) => {
      console.log(response);
      this.reset(addForm);
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
        this.reset(addForm);
      }
    )
  }

}
