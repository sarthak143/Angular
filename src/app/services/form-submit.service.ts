import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { User } from '../home/home.component';
@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

    url="https://formspree.io/sarthak.tiet@gmail.com";
    
  constructor(private http: HttpClient) { }

  enroll(user:User){
     return this.http.post<any>(this.url, {body:user} );
    //return this.http.post<any>(this.url, user );
  }
}
