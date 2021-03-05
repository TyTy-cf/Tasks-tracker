import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user: User;

  userForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  login(): void { }
}
