import { Component, Input, OnInit } from '@angular/core';
import { AzureActiveDirectoryService } from '../../services/azure-active-directory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string;

  constructor(public ad: AzureActiveDirectoryService) {
    this.titulo = "";
  }

  ngOnInit() {
  }
}
