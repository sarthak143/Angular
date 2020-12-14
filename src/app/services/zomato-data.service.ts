import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZomatoDataService {

  constructor(private http: HttpClient) { }

  public getZomatoData(entity_id,entity_type,q,count): Observable<any>{
/*           url: "https://developers.zomato.com/api/v2.1/search?entity_id=" +
        this.valueDropdown +
        "&entity_type=city" +
        searchCity +
        "&count=100",
      method: "GET",
      headers: {
        "user-key": "d710754ce67200fb6fb9b5e26139f50e",
        "Content-Type": "application/x-www-form-urlencoded"
      // } */
      
     const headers = {
      "user-key": "d710754ce67200fb6fb9b5e26139f50e",
      "Content-Type": "application/x-www-form-urlencoded"
     };
     return this.http.get("https://developers.zomato.com/api/v2.1/search?entity_id="
     +entity_id
     +"&entity_type="+entity_type
     +"&q="+q
     +"&count=100", {headers: headers});
  }
}
