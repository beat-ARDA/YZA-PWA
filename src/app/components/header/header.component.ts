import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message!: string;
  detalleVal:boolean = true;
  currentUrl!: string;
constructor(private router:Router, private helper: HeaderService) {
  this.router.events.subscribe((event) => {

    if (event instanceof NavigationEnd) {

      this.currentUrl = event.url

     
      if(this.currentUrl === '/detalles'){
        this.detalleVal = false;
        console.log('NavigationEnd:', event.url);
      }
      else{
        this.detalleVal=true;
      }
    }

  })
 
}

ngOnInit() {
   this.helper.customMessage.subscribe(msg => this.message = msg);
   if(this.router.url === '/detalles'){
     console.log('hola');
   }
   console.log(this.router.url);
   
  }

}
