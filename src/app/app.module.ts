import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { ButtonImgComponent } from './button-img/button-img.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ButtonIconComponent,
    ButtonImgComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    DataService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
