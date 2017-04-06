import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Todo } from '../../todo';

import { Observable } from 'rxjs/Observable';
import * as rxjs from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs';



@Injectable()
export class IssueDataService {
    clientId: string = '8841b2853b6e4a34a846249c8564ed81';
    redirectUri: string = 'http://localhost:4200';

  constructor(
      private http: Http,
  ) { }

  getIssues(): any {
    return this.http.get('https://api.github.com/repos/angular/angular/issues')
        .map((res) => res.json())
        .map((body) => {
        console.log(body);
        // have to slice here, take only deals with incoming response events
          return body.slice(0,5).map(issue =>
          // no need curly braces, will assume it is returned
            new Todo({
              title: issue.title,
              link: issue.html_url,
              complete: false
            }));
          })
        .catch((err) => {
      console.log(err);
      return Observable.throw(err);
        })
  }

  login(): any {
      return this.http.get(`https://api.instagram.com/oauth/authorize/?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=token`)
          .map((res) => res.json())
          .catch((err) => {
          return Observable.throw(err);
          })
  }





}
