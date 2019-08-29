import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
  })
export class UserComponent {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Venkatesh A';
    this.email = 'venkateshsrinivas06@gmail.com';
    this.address = {
      street: 'lakhmi nagar',
      city: 'chennai',
      state: 'TN'
    }
    this.hobbies = ['Music', 'Cricket']
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    if (this.showHobbies)
    this.showHobbies = false;
    else
    this.showHobbies = true;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(index: number){
    this.hobbies.splice(index, 1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post{

  id: number;
  title: string;
  body: string;
}