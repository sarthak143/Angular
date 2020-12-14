import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
  providers: [DatePipe],
})
export class NewsComponent implements OnInit {
  responseData;
  newsData;
  category: string;
  myDate = new Date();
  date;
  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.date = this.datePipe.transform(this.myDate, "yyyy-MM-dd");
    console.log(this.date);
    this.category = "";
  }

  categorySelect(e) {
    console.log(e);
    this.category = "&category=" + e;
    this.ngOnInit();
  }
  ngOnInit(): void {
    // const url="http://newsapi.org/v2/everything?q=bitcoin&from="+ this.date+"&sortBy=publishedAt&apiKey=4fa7989f4e114e80bd183af903e0a920"
    const url =
      "https://newsapi.org/v2/top-headlines?country=in" +
      this.category +
      "&apiKey=4fa7989f4e114e80bd183af903e0a920";
    this.http.get(url).subscribe((res) => {
      this.responseData = res;
      this.newsData = this.responseData.articles;
      console.log(this.newsData);
    });
  }
}
