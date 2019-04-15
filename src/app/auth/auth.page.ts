import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    public readonly auth: AuthService
  ) { }

  ngOnInit() {
  }

  public signIn() {
    this.auth.signInEmail('', '');
  }

}
