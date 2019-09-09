import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signInCard = true;
  signInSuccessful = false;
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    type: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let name = this.registrationForm.get('name').value;
    let username = this.registrationForm.get('username').value;
    let password = this.registrationForm.get('password').value;
    let type=this.registrationForm.get('type').value;
    console.log('name', name, 'username', username, 'password', password, 'type', type);

    //saveClient ruta
    //zakucane vrednosti-proba

    if (name === 'matija' && username === 'matija' && password === 'matija' && type==='admin') {
      this.signInSuccessful=true;
      this.signInCard=false;
      setTimeout(() => this.router.navigate(['/dashboard/navbar']), 3000);
    }
  }

}
