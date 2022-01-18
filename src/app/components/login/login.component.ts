import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validacion = false;
  constructor(private authenticationService: AuthenticationService) { }
  
  ngOnInit(): void {
  }
  
  login(){
    this.validacion = true;
    this.checkCredentials(this.validacion);
  }

  private checkCredentials(signInForm: boolean) {
    const signInData = signInForm;
    this.authenticationService.authenticate(signInData)
}

}
