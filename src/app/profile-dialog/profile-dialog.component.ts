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
  constructor(  private dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,public dataService:DataService) { 
      this.dialogData=data.userName;
    }

  ngOnInit(): void {
    console.log(this.dialogData);
    this.dataService.fetchUser(this.dialogData).subscribe((res)=>{
      console.log(res);
      this.dataDisplayed=res;
    });
  }
  save() {
    this.dialogRef.close();
}

close() {
    this.dialogRef.close();
}

}
