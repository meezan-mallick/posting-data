import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";
import { subscribeOn } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.FetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // console.log(postData);
    this.http
      .post(
        "https://angular-test-b2acb-default-rtdb.firebaseio.com/post.json",
        postData
      )
      .subscribe(responseData => {
        console.log("ost saved");
      });
  }

  onFetchPosts() {
    // Send Http request
    this.FetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  FetchPosts()
  {
    this.http.get("https://angular-test-b2acb-default-rtdb.firebaseio.com/post.json").subscribe(posts => {
      console.log(posts);
    });
  }
}
