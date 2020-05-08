import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  posts = [];
  constructor(private router: Router, private postService: PostService) {

  }

   ngOnInit(){
    this.posts = this.postService.getAllPosts();
   }

   onPostClick(currPost){
    let navExtras: NavigationExtras = {
      queryParams : {
        post : JSON.stringify(currPost)
      }
    };
    this.router.navigate(['post-detail'],navExtras);
   }

}
