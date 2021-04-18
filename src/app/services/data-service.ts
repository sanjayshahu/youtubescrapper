import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class DataService{
    constructor(private http: HttpClient){}
    firstApi= "https://api.github.com/search/users?q=";
    secondApi="https://api.github.com/users/";

    fetchUsers(userName){
        let url=this.firstApi+userName;
        return this.http.get(url).pipe(map((response: any) => response));

    }
    fetchUser(userName){
      let url=this.secondApi+userName;
      return this.http.get(url).pipe(map((response: any) => response));

  }
   
}