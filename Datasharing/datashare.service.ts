import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor(private http: HttpClient) { }
  generateOtp(mobNo:any){
    let requestData={
      "mobile":mobNo
    }
    return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',requestData )
    // https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP
  }
  confirmOtp(requestData:any){
    return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',requestData )
    // https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP
  }

  getState(){
    return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
  }
  getDistrict(state_id:any){
    let url='https://cdn-api.co-vin.in/api/v2/admin/location/districts/' +state_id;
    return this.http.get(url);
  }
  
}
