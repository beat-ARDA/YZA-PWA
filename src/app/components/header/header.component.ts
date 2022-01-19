import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message!: string;
  
constructor(private helper: HeaderService) { }
ngOnInit() {
    this.helper.customMessage.subscribe(msg => this.message = msg);
  }

}
