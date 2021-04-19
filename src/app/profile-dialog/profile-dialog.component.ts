import { Component, OnInit ,Inject} from '@angular/core';
import {DataService} from '../services/data-service';


import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {

  dialogData:any;
  dataDisplayed:any;
  urlData="";
  constructor(  private dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,public dataService:DataService) { 
      this.dialogData=data;
    }

  ngOnInit(): void {
    console.log(this.dialogData);
    this.dataDisplayed=this.dialogData.userName;
    this.urlData=`https://www.youtube.com/embed/${this.dialogData.userName.id_details}`;
    // this.dataService.fetchUser(this.dialogData).subscribe((res)=>{
    //   console.log(res);
    //   this.dataDisplayed=res;
    // });
  }
  save() {
    this.dialogRef.close();
}

close() {
    this.dialogRef.close();
}

}
