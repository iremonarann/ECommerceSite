import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: ``
})
export class AdminLayoutComponent {

  constructor(private router: Router){}
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/account','login']);
  }
}
