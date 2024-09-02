import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  filter = {
    name: '',
    surname1: '',
    surname2: '',
    email: ''
  };
  page = 1;
  pageSize = 5;
  totalUsers = 0;
  totalPage: number = 0;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  //Method to get users based on filters and current pagination
  getUsers() {
    this.userService.getUsers(this.filter, this.page, this.pageSize).subscribe(r => {
      this.users = r.users;
      this.totalUsers = r.total;
      this.totalPage = Math.trunc(this.totalUsers / this.pageSize);
    })
  }

  // Method to be called when the user makes a query
  onSearch() {
    this.page = 1;
    this.getUsers();
  }

  //Method to change page
  onPageChange(page: number) {
    this.page = page;
    this.getUsers();
  }

}
