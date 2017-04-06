import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnChanges{

  @Input() post: Post;

  constructor() {
  }

  ngOnChanges(changes) {
    console.log(changes);
  }


}