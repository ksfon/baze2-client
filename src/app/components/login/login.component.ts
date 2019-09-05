import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInServiceService } from 'src/app/services/log-in-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  loginSuccessful = false;
  logInCard = true;
  constructor(private fb: FormBuilder,
    private logInService: LogInServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {

  }

  onSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
// ZAKUCANO
    if (username === 'matija') {
      if (password === 'matija') {
        this.loginSuccessful = true;
        this.logInCard = false;
       setTimeout(() => this.router.navigate(['/dashboard/navbar']), 3000);
      }
    }
  }
}
