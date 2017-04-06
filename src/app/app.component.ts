import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { InstagramService } from './services/instagram/instagram.service';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'ng2-webstorage';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private instagramService: InstagramService,
              private storage: SessionStorageService,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
        let token =  fragment ? fragment.split('=') : [];

        if (token[0] === 'access_token') {
          this.storage.store(token[0], token[1]);
        }

    });

      this.instagramService.getPosts()
          .subscribe(
              posts => {
                  this.posts = posts;
              });
  }

}
