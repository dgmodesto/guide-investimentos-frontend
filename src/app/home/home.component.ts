import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  items: any;

  ngOnInit() {
    this.apiService.getAllAuthors().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }
}
