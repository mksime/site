import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Post } from 'src/app/models/post'
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post = {} as Post;
  posts: Post[];

  constructor(
    public postService: PostService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }

  getPost(id) {
    this.postService.getPostById(id).subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(this.posts);
    });  
  }
}
