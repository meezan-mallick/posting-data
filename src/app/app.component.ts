import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  loadedPost:Post[]=[];

  constructor(private http: HttpClient, private PostService:PostService) {}

  ngOnInit() {
    this.FetchPosts();
  }

 

  onCreatePost(postData:Post ) {
    // Send Http request
    // console.log(postData);
    this.PostService.createPost(postData);
    
  }


  onClearPosts() {
    this.PostService.deletePost().subscribe(() => {
      // console.log(posts);
     this.loadedPost=[];

    });
  }
 

  FetchPosts()
  {
    this.PostService.fetchPost().subscribe(posts => {
      // console.log(posts);
      this.loadedPost= posts;

    });
  }
}
