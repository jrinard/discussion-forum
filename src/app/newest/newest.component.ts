import { Component, OnInit, Input } from '@angular/core';
import { ListPostComponent } from '../list-post/list-post.component';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';


@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css'],
  providers: [PostService]
})
export class NewestComponent implements OnInit{
  posts: Post[]; // assigning variable

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();// returns array of post objects and assigns to posts
  }

  goToDetailPage2(clickedPost: Post) {
    console.dir(clickedPost);
    this.router.navigate(['posts', clickedPost.id]);
  };


}
