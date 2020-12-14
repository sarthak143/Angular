import { Component, OnInit } from '@angular/core';
import{FormSubmitService} from '../services/form-submit.service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    userModel = new User('','','New submission!','');

  constructor(private form : FormSubmitService, private viewportScroller: ViewportScroller) { }
    
  public scrollTo(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
     
        }

    onSubmit(){
      console.log(this.userModel);
      this.form.enroll(this.userModel)
      .subscribe(
      data => console.log('success!', data),
      error => console.error('error!' , error),

          )
    }
    ngOnInit(): void {
      
    }

  }


export class User {
  constructor(
    public name:string,
    public _replyto:string,
    public _subject:string,
    public message:string
  ){  }

}