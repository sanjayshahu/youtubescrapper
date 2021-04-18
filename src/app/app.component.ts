import { Component } from '@angular/core';
import {DataService} from './services/data-service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProfileDialogComponent} from "./profile-dialog/profile-dialog.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitapp';
  query:string='';
  userArray:any[]=[];
  constructor(public dataService:DataService,private dialog: MatDialog){

  }

fetchUsers(){
  console.log(this.query);
  this.dataService.fetchUsers(this.query).subscribe((res)=>{
    console.log(res);
    this.userArray=res["items"];
  });

}
openDialog(user) {
 
//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.data = {
  
// };

//   dialogConfig.position = {
//     'top': '0',
//     left: '0'
// };


 const dialogRef= this.dialog.open(ProfileDialogComponent, {
  data: {
    userName:user
  },
  width: '600px',
  height: '320px'});
  
  dialogRef.afterClosed().subscribe(
    data => console.log("Dialog output:", data)
);  
}
ascending(){
  this.userArray=this.userArray.sort(function(a, b){return a.score- b.score});
}
descending(){
  this.userArray=this.userArray.sort(function(a, b){return b.score-a.score});
}
}
