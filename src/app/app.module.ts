import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileDialogComponent]
})
export class AppModule { }
