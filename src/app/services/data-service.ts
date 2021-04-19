import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class DataService{
    constructor(private http: HttpClient){}
    firstApi= "http://localhost:3001/videos";
    secondApi="https://api.github.com/users/";

    fetchUsers(video){
        let url=this.firstApi;
        return this.http.get(url).pipe(map((response: any) => response));

    }
    fetchUser(userName){
      let url=this.secondApi+userName;
      return this.http.get(url).pipe(map((response: any) => response));

  }
   
}