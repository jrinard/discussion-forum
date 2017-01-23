import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  @Input() childPostList: Post[];

  @Output() detailSender = new EventEmitter();

  goToDetailPage(post: Post) {
    this.detailSender.emit(post);
  }
}
