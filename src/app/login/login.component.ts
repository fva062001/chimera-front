import { Component, OnInit } from '@angular/core';
import { user } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:UserService) { }

  ngOnInit(): void {
  }

}
