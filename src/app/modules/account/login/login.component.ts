import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  constructor(private accountService: AccountService,
              private router: Router) { }

  login(frm: NgForm) {
    this.accountService.login(frm.value.username, frm.value.password).subscribe(data => {
      localStorage.setItem('token', data.token);
      this.router.navigateByUrl("/");
    });
  }
}
