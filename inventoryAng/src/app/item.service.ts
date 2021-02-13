import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Item } from './item';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ItemService{
  private serverUrl = environment.apiServerUrl;

  constructor(private http: HttpClient){}

  public getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.serverUrl+'/all');
  }
  public delete(itemId:number): Observable<void>{
      return this.http.delete<void>(this.serverUrl+'/delete/'+itemId+'');
  }
  public getItem(itemId:number): Observable<Item>{
      return this.http.get<Item>(this.serverUrl+'/get/'+itemId+'')
  }
  public addItem(item:Item): Observable<Item>{
    return this.http.post<Item>(this.serverUrl+'/add', item);
  }
  public addAmount(item:Item): Observable<Item>{
    return this.http.put<Item>(this.serverUrl+'/addToItem',item);
  }
  public removeAmount(item:Item): Observable<Item>{
    return this.http.put<Item>(this.serverUrl+'/removeFromItem',item);
  }

}