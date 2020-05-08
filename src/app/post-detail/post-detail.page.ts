import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  post: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params =>{
      if(params && params.post){
        this.post = JSON.parse(params.post);
        this.getAuthorDetails(this.post.authorId);
      }
    });
   }

  ngOnInit() {
  }

  getAuthorDetails(authId : string){
    //call API - get details
    this.post.author = {
      name : 'Jane Doe',
      profileImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--AfKcL8w7--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/44980/fca1c2a5-522c-4709-bc5a-2b82a55560ad.jpg'
    }
  }

  goback(){
    window.history.back();
  }

}
