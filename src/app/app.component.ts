import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Guide Admission Test";
}

export interface Transaction {
  id: number;
  author: string;
}

export class TableFooterRowExample {
  displayedColumns: string[] = ["author", "id"];
  transactions: Transaction[] = [
    { author: "Beach ball", id: 4 },
    { author: "Towel", id: 5 },
    { author: "Frisbee", id: 2 },
    { author: "Sunscreen", id: 4 },
    { author: "Cooler", id: 25 },
    { author: "Swim suit", id: 15 }
  ];
}
