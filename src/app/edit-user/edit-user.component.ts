import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user.model';
import 'rxjs/add/operator/switchMap';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getUserFromParam();
  }

  getUserFromParam(){
    this.route.params.subscribe((params) => {
      this.user = JSON.parse(params.data);
    });
  }

  async save() {
    const res = await this.apiService.updateUser(this.user);
    const data = JSON.parse ( res[ '_body' ] );
    console.log(data);
  }

}
