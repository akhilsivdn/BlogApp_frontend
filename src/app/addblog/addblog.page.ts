import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.page.html',
  styleUrls: ['./addblog.page.scss'],
})
export class AddblogPage implements OnInit {
  title : String;
  description : String;
  file: File;


  constructor(private postService: PostService) { }

  changeListener($event) {
     this.file = $event.target.files[0];
   }
  
  logForm(form) {
    this.postService.addblogPost(form.value.title, form.value.description, this.file);
  }

  ngOnInit() {
  }

}
