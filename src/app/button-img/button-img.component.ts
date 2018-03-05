import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'button-img',
  templateUrl: './button-img.component.html',
  styleUrls: ['./button-img.component.css'],
  providers: [DataService]
})
export class ButtonImgComponent implements OnInit {

  photosData: Object;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.showPhotos();
  }

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
