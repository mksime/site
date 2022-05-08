import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {

  post = {} as Post;
  error: any;
//  posts: Post[];

  constructor(
    public postService: PostService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  // savePost(form: NgForm) {
  //   this.postService.savePost(this.post).subscribe(() => {
  //     this.cleanForm(form),
  //     (error: any) => this.error = error
      
  //   });
  // }

  savePost(form: NgForm) {
    this.postService.savePost(this.post).subscribe(
      success => this.router.navigate(['posts/']),
      (error: any) => this.error = error
    );
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.post = {} as Post;
  }
}
