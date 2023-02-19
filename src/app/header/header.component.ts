import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType : string = "default"
  constructor(private route : Router){
  }

  ngOnInit():void{
    this.route.events.subscribe((value:any)=>{
      if(value.url){
        if(localStorage.getItem('seller') && value.url.includes('seller')){
          console.warn("in seller area");
          this.menuType = "seller"
        }else{
          console.warn("outside seller");
          this.menuType = "default"
        }

      }
    })
  }

}
