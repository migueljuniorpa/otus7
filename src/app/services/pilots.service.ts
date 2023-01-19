import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../enviroment/env.dev";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PilotsService {

  constructor(private http:HttpClient) { }

  getPilots(): Observable<any> {
    return this.http.get(env.api_url)
  }
}
