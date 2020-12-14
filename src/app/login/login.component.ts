import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { AuthServiceService } from "../services/auth-service.service";
import "../../assets/login-animation.js";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthServiceService],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  msg: string;
  output: boolean;

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login() {
    this.output = this.service.checkusernameandpassword(
      this.email,
      this.password
    );
    if (this.output == true) {
      this.routes.navigate(["/home"]);
    } else {
      this.msg = "Invalid username or password";
    }
    // console.log(`email: ${this.email} password: ${this.password}`);
    // alert(`Email: ${this.email} Password: ${this.password}`);
  }
  constructor(private service: AuthServiceService, private routes: Router) {}
  autofill(e) {
    if (e.target.checked) {
      this.email = "admin";
      this.password = "admin123";
    } else {
      this.email = "";
      this.password = "";
    }
  }
  ngOnInit(): void {}
}
