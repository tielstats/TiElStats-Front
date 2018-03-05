import { Component } from '@angular/core';
import { AppModule } from './app.module';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
   title = 'app';
   photosData: Object;
   someProperty:string = '';

  constructor(private dataService:DataService) {}

  ngOnInit() { 
    this.showPhotos();
    console.log("this.photosData", this.photosData);}

  showPhotos() {
      this.dataService.getPhotos()
      .subscribe(data => this.photosData = data
      ,
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured.");
            } else {
              console.log("Server-side error occured.");
            }
          });
  }

}
