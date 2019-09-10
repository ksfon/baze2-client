import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInServiceService } from 'src/app/services/log-in-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallBroker } from 'src/app/services/CallBroker';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    username: ['matija_username', Validators.required],
    password: ['matija_pass', Validators.required]
  });

  loginSuccessful = false;
  logInCard = true;
  loginObservable: Subscription;
  
  constructor(
    private callBroker: CallBroker,
    private fb: FormBuilder,
    private logInService: LogInServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {

  }

  onSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    
    this.loginObservable = this.callBroker.login(username, password).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('cities', JSON.stringify(response.cities));
      localStorage.setItem('airplanes', JSON.stringify(response.airplanes));
      this.loginSuccessful = true;
      this.logInCard = false;
      setTimeout(() => this.router.navigate(['/dashboard/navbar']), 2000);
    }, (err) => {
      console.log(err);
    });

// ZAKUCANO
    // if (username === 'matija') {
    //   if (password === 'matija') {
    //     this.loginSuccessful = true;
    //     this.logInCard = false;
    //    setTimeout(() => this.router.navigate(['/dashboard/navbar']), 3000);
    //   }
    // }
  }
}
