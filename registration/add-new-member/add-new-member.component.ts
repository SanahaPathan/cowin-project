import { Component, OnInit } from '@angular/core';
import { DatashareService } from 'src/app/Datasharing/datashare.service';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {
  photoIds:any=['Aadhaar Card','Driving License','PAN Card','Passport','Passport','Voter ID']
  onClickOpen:any= true;
  OnclickOpenSingUp:any= false;
  onclickadd:any=false;

constructor(private mySer:DatashareService) { }
public mobNo:any;
public txnId:any;
public otp:any;



  ngOnInit(): void {
  }
  generateOtp(){
    this.onClickOpen=false;
    this.OnclickOpenSingUp=true;
    this.onclickadd=false;
    console.log(this.mobNo);
    this.mySer.generateOtp(this.mobNo).subscribe((res:any)=>{
      console.log(res);
      let data:any = res;
      console.log(data.txnId);
      this.txnId= data.txnId;

    })
  }
  confirmOtp(){
    this.OnclickOpenSingUp=false;
    this.onClickOpen=false;
    this.onclickadd=true;
    console.log(this.otp);
    this.otp = this.otp.toString();
    let requestData ={
      "otp":this.otp,
      "txnId":this.txnId
    }
    this.mySer.confirmOtp(requestData).subscribe((res:any)=>{
    console.log(res)
     });
  }
  add(){
    this.OnclickOpenSingUp=false;
    this.onClickOpen=true;
    this.onclickadd=false
    console.log('Adding')
  }
  
}
