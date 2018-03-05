import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { AppModule } from './app.module';

@Injectable()
export class DataService {

  constructor(private http:HttpClient) {  }

   getPhotos(){
          return this.http
          .get('https://jsonplaceholder.typicode.com/photos');
    }

}
