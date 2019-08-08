import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

@Component({
  selector: "app-create-author",
  templateUrl: "./create-author.component.html",
  styleUrls: ["./create-author.component.scss"]
})
export class CreateAuthorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      debugger;
      this.apiService.createOrEditAuthor(this.form.value).subscribe(data => {
        debugger;
        console.log(data);
      });

      this.router.navigate(["home"]).then(() => {
        window.location.reload();
      });
    }
  }
}
