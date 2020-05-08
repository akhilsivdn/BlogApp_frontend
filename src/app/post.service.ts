import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  blogPosts = [];
  constructor() { 
    this.blogPosts.push({
      title: 'This is first post title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      postImage: 'https://i.picsum.photos/id/485/250/150.jpg',
      authorId: '0505',
    });
  
    this.blogPosts.push({
     title: 'This is second post title',
     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
     postImage: 'https://i.picsum.photos/id/358/250/150.jpg',
     authorId: '0505'
   });
  
  
   this.blogPosts.push({
     title: 'This is third post title',
     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
     postImage: 'https://i.picsum.photos/id/959/250/150.jpg',
     authorId: '0505'
   });
  
   this.blogPosts.push({
     title: 'This is fourth post title',
     description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
     postImage: 'https://i.picsum.photos/id/888/250/150.jpg',
     authorId: '0505'
   });
  
  
   this.blogPosts.push({
     title: 'This is fifth post title',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     postImage: 'https://i.picsum.photos/id/412/250/150.jpg',
     authorId: '0505'
   });
    
  }

  addblogPost(postTitle, postDescription, postImage){
    console.log(postTitle + ' ' + postDescription + ' '+ postImage.name);
    this.blogPosts.push({
      title: postTitle,
      description: postDescription,
      postImage: 'https://i.picsum.photos/id/796/250/150.jpg',
      authorId: '535',
    });
}

getAllPosts(){
 return this.blogPosts;
}
}
