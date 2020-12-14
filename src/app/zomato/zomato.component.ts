import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ZomatoDataService } from "./../services/zomato-data.service";
@Component({
  selector: "app-zomato",
  templateUrl: "./zomato.component.html",
  styleUrls: ["./zomato.component.css"],
  providers: [ZomatoDataService]
})
export class ZomatoComponent implements OnInit {
  valueSearchBox: any;
  valueDropdown: any = 4;
  settings: any;
  responseData: any;
  restaurantData: any;

  constructor(
    private http: HttpClient,
    private zomatoService: ZomatoDataService
  ) {}

  getData() {
    this.zomatoService
      .getZomatoData(this.valueDropdown, "city", this.valueSearchBox, 100)
      .subscribe(
        resp => {
          //console.log(`Inside Angular \nresp: ${resp}`);
          this.responseData = resp;
          this.restaurantData = this.responseData.restaurants;
          console.log(this.restaurantData);
        },
        error => {
          console.log(`Error: ${error.msg}`);
        }
      );
  }

  ngOnInit(): void {}
}
