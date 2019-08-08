import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  URL_BASE = "https://localhost:44340";
  constructor(private httpClient: HttpClient) {}

  public getAllAuthors() {
    return this.httpClient.get(`${this.URL_BASE}/api/Author/GetAllAuthors`);
  }

  public createOrEditAuthor(param): Observable<{}> {
    debugger;
    return this.httpClient.post(`${this.URL_BASE}/api/Author/CreateOrEdit`, {
      Id: 0,
      Name: param.name
    });
  }
}
