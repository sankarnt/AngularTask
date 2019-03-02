import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Developer } from './developers';


@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  getDeveloperList(): Developer {
    let obj =  {
      "name" : "Sankar", 
      "role": "String", 
      "userId": 2123
    }
      return obj;
  }

  // getPost() {
  //   return this.http.get("https://jsonplaceholder.typicode.com/posts")
  //     .pipe(
  //       tap(() => {
  //         console.log("sankar");
  //       })
  //     );
  // }


  

  constructor( private http: HttpClient) { }
}
