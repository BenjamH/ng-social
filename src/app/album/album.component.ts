import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  @Input()
  posts: Post[];

  constructor() {
  }

}