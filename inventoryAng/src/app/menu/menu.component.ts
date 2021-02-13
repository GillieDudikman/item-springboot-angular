import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit { 
  replaceComponent:any;

  constructor(private cvRef:ViewContainerRef,private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  close(){
    this.cvRef.clear();
  }

  async open(name:string){
    this.cvRef.clear();
    if(name==='getAll'){
      const{AllItemsComponent}= await import('../all-items/all-items.component');
      this.cvRef.createComponent(this.resolver.resolveComponentFactory(AllItemsComponent));
    }else if(name==="getId"){
      const{GetItemIdComponent}= await import('../get-item-id/get-item-id.component');
      this.cvRef.createComponent(this.resolver.resolveComponentFactory(GetItemIdComponent));
    }
    else if(name==="add"){
      const{AddFormComponent}= await import('../add-form/add-form.component');
      this.cvRef.createComponent(this.resolver.resolveComponentFactory(AddFormComponent));
    }
    else if(name==="delete"){
      const{DeleteItemComponent}= await import('../delete-item/delete-item.component');
      this.cvRef.createComponent(this.resolver.resolveComponentFactory(DeleteItemComponent));
    }
    else if(name==="deposit"){
      const{AddAmountComponent}= await import('../add-amount/add-amount.component');
      this.cvRef.createComponent(this.resolver.resolveComponentFactory(AddAmountComponent));
    }
    else if(name === "withrow"){
      const{RemoveAmountComponent}= await import('../remove-amount/remove-amount.component');
      this.cvRef.createComponent(this.resolver.resolveComponentFactory(RemoveAmountComponent));

    }
    


  }

  

}
