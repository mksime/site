import { Component, OnInit } from '@angular/core';
import {BlogService} from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post = {
    title: '',
    body: '',
    categories: null, 
  };
  submitted: false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  savePost() {
    const data = {
      title: this.post.title,
      body: this.post.body,
    };

    this.blogService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  
  newPost() {
    this.submitted = false;
    this.post = {
      title: '',
      body: '',
      categories: null
    };
  }
}
