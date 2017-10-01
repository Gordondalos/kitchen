import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    public apiService: ApiService,
    private router: Router,
  ) {
  }

  async ngOnInit() {
    this.users = await this.apiService.getUsers();
  }

  goToAddUser() {
    this.router.navigateByUrl('/create-user');
  }

  editUser(user) {
    const jsonParam = JSON.stringify(user);
    this.router.navigate(['/edit-user', { data: jsonParam }]);
  }

}
