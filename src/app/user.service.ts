import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  usersStats: Object = [
    {
      userId: 0,
      charts: 15,
      stars: 56,
      watchers: 10,
      watching: 36                  
    },
    {
      userId: 1,
      charts: 16,
      stars: 56,
      watchers: 10,
      watching: 36                  
    }
  ]

  getUsers(){
          return this.http
          .get('https://jsonplaceholder.typicode.com/users');
  }
  getStats( userId ){
    
      return this.usersStats[userId];
  }

}
