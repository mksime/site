import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {

  post = {} as Post;
//  posts: Post[];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(form: NgForm) {
    this.postService.savePost(this.post).subscribe(() => {
      this.cleanForm(form);
      console.log("ok");
      
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.post = {} as Post;
  }
}
