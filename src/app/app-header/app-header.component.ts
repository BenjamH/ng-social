import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram/instagram.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {


  constructor(private instagramService: InstagramService) {
  }

  ngOnInit() {
  }

}