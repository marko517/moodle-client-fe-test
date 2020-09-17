import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';
import { UserWrapperModel } from '../shared/users-wrapper-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userWrapper: UserWrapperModel;
  users: UserModel[] = [];

  searchUserForm: FormGroup = new FormGroup({
    userId:  new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private toastrService: ToastrService) { 
    this.userService.getAllUsers().subscribe(response => {
      this.userWrapper = response;
      this.users = this.userWrapper.users;
    });
  }

  ngOnInit(): void {
  
  }

  searchUsers() {
    this.userService.getUser(this.searchUserForm.value['userId']).subscribe(response => {
      this.userWrapper = response;
      if (this.userWrapper.users.length === 0) {
        this.toastrService.warning("There are no users found with the given ID");
      } else {
        this.users = this.userWrapper.users;
      }
    });
  } 
}
