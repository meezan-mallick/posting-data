import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core' 
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({providedIn:'root'})

export class PostService{

  constructor(private http: HttpClient) {}

  createPost(postData:Post){
    this.http
      .post(
        "https://api-testing-303817-default-rtdb.firebaseio.com//post.json",
        postData
      )
      .subscribe(responseData => {
        console.log("post saved");
        console.log(responseData);
      });
      
    console.log("post created");

  }


  fetchPost()
  {
    console.log("fetching post");
    return this.http.get("https://api-testing-303817-default-rtdb.firebaseio.com//post.json")
    .pipe(map((responseData: {[key:string]:Post}) =>{
      const postArray:Post[] =[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key],id:key})
        }
      }
      return postArray;
    }));
  }

  deletePost()
  {
    return this.http.delete(
        "https://api-testing-303817-default-rtdb.firebaseio.com//post.json"
      )
     
      
   

  }
  
}