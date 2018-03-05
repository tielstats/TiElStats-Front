import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
  providers: [UserService, DataService]
})
export class ProfileCardComponent implements OnInit {

  userStats: Object;
  photosData: Object;

  constructor(private userService: UserService, private dataService:DataService) { }

  ngOnInit() {
    this.showUserStats();
    this.showPhotos();
    console.log("-----------------", this.userStats);
  }

  showUserStats() {
      this.userStats = this.userService.getStats(0);
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
