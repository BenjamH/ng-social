import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram/instagram.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  userId: string;
  authUrl: string;


  constructor(private instagramService: InstagramService) {
  }

  ngOnInit() {
    this.userId = this.instagramService.userId;
    this.authUrl = this.instagramService.authUrl;
  }

}