import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { AppComponent } from './app.component';
import { ItemService } from './item.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFormComponent } from './add-form/add-form.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { GetItemIdComponent } from './get-item-id/get-item-id.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveAmountComponent } from './remove-amount/remove-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    AllItemsComponent,
    GetItemIdComponent,
    DeleteItemComponent,
    AddAmountComponent,
    MenuComponent,
    RemoveAmountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxTrimDirectiveModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
