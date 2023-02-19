import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  showLogin = false

  authError = "";

  constructor(private seller : SellerService , private router : Router){

  }

  ngOnInit():void{
    this.seller.reloadSeller();
  }

  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
  }
  Login(data:SignUp):void{
    this.authError = " "
   // console.log(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = " Email or Password is not correct"
      }
    })
  }

  openLogin(){
    this.showLogin = true
  }

  openSignUp(){
    this.showLogin = false
  }
}
