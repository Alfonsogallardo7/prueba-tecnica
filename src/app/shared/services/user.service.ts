import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //List of users
  private users = [
    { id: 1, email: 'admin@yopmail.com', name: 'admin', surname1: 'admin', surname2: 'admin' },
    { id: 2, email: 'admin2@yopmail.com', name: 'admin2', surname1: 'admin2', surname2: 'admin2' },
    { id: 3, email: 'admin3@yopmail.com', name: 'admin3', surname1: 'admin3', surname2: 'admin3' },
    { id: 4, email: 'admin4@yopmail.com', name: 'admin4', surname1: 'admin4', surname2: 'admin4' },
    { id: 5, email: 'admin5@yopmail.com', name: 'admin5', surname1: 'admin5', surname2: 'admin5' },
    { id: 6, email: 'admin6@yopmail.com', name: 'admin6', surname1: 'admin6', surname2: 'admin6' },
    { id: 7, email: 'admin7@yopmail.com', name: 'admin7', surname1: 'admin7', surname2: 'admin7' },
    { id: 8, email: 'admin8@yopmail.com', name: 'admin8', surname1: 'admin8', surname2: 'admin8' },
    { id: 9, email: 'admin9@yopmail.com', name: 'admin9', surname1: 'admin9', surname2: 'admin9' },
    { id: 10, email: 'admin10@yopmail.com', name: 'admin10', surname1: 'admin10', surname2: 'admin10' },
  ]

  constructor() { }

  // Method to get users with filter and pagination
  getUsers(filter: any = {}, page: number = 1, pageSize: number = 5): Observable<any> {
    let filteredUsers = this.users;

    //Apply filters according to your search
    if (filter.name) {
      filteredUsers = filteredUsers.filter(user => user.name.toUpperCase().includes(filter.name.toUpperCase()));
    }
    if (filter.surname1) {
      filteredUsers = filteredUsers.filter(user => user.surname1.toUpperCase().includes(filter.surname1.toUpperCase()));
    }
    if (filter.surname2) {
      filteredUsers = filteredUsers.filter(user => user.surname2.toUpperCase().includes(filter.surname2.toUpperCase()));
    }
    if (filter.email) {
      filteredUsers = filteredUsers.filter(user => user.email.toUpperCase().includes(filter.email.toUpperCase()));
    }

    //Implement pagination
    const initIndex = (page - 1) * pageSize;
    const paginatedUsers = filteredUsers.slice(initIndex, initIndex + pageSize);

    //Returns paged users and total number of filtered users 
    return of({ users: paginatedUsers, total: filteredUsers.length })
  }
}
