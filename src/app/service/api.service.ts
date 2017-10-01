import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { User } from '../models/user.model';

import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  apiUrl = 'http://localhost:8000';

  constructor(
    private httpClient: HttpClient,
    private http: Http) {
  }

  getUsers(): Promise <User[]> {
    return new Promise ((resolve) => {
      this.httpClient.get(this.apiUrl + '/user').subscribe((data) => {
        resolve(data);
      });
    })
  }

// /user/{id}/edit
  updateUser(user: User) {
    const headers = new Headers ( {
      'Content-Type' : 'application/json; charset=UTF-8',
      'format' : 'json',
      'URI' : '/user/' + user.id + '/edit'
    } );
    const options = new RequestOptions ({ headers : headers });
    const data = JSON.stringify(user);
    return this.http.put( this.apiUrl + '/user/' + user.id + '/edit', data, options )
      .toPromise()
  }


}
