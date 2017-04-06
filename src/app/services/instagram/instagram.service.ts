import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Post } from '../../post';
import { environment } from '../../../environments/environment';
import { Jsonp, URLSearchParams } from '@angular/http';
import { SessionStorageService } from 'ng2-webstorage';

import { Observable } from 'rxjs/Observable';
import 'rxjs';



@Injectable()
export class InstagramService {
    clientId: string = '8841b2853b6e4a34a846249c8564ed81';
    redirectUri: string = environment.url;
    authUrl: string = `https://api.instagram.com/oauth/authorize/?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=token`;
    token: string = this.storage.retrieve('access_token') || '';
    userId: string = '4927815';

    constructor(
      private jsonp: Jsonp,
      private storage: SessionStorageService
  ) { }

  getUserInfo(): any {
      return this.jsonp.get(`https://api.instagram.com/v1/users/self/?access_token=${this.token}&callback=JSONP_CALLBACK`)
          .map(this.extractData)
          .map((body) => {
              this.userId = body.data.id;
              return body.data;
          })
          .catch((err) => {
            return Observable.throw(err);
          })
  }

    getPosts(): any {
        let lastId = 0;

        return this.jsonp.get(`https://api.instagram.com/v1/users/${this.userId}/media/recent/?access_token=4927815.8841b28.5c83fc7622c94d6ab1f05effd1c77966&callback=JSONP_CALLBACK`)
            .map(this.extractData)
            .map((body) => {
                return body.data.map(data =>
                    new Post({
                        id: ++lastId,
                        title: data.images.standard_resolution.url,
                        link: data.images.standard_resolution.url,
                        caption: data.caption.text,
                        likes: data.likes.count,
                        complete: false
                    }));
            })
            .catch((err) => {
                return Observable.throw(err);
            })
    }

    private extractData(res: Response): any {
        let body = res.json();
        return body || { };
    }

}
