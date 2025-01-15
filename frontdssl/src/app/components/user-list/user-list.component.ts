import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('userModal') userModal?: UserFormComponent;
  users: User[] = [];
  userForm: FormGroup;
  currentUserId?: number;
  editMode: boolean = false;
  constructor(private userService: UserService, private fb: FormBuilder, private modalService: NgbModal) {

    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    })

  }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => this.users = response,
      (error) => console.error("error en el loading", error)
    )
  }
  editUser(user: any) {
   
    const modalElement = document.getElementById('userModal');
    

    this.currentUserId = user.id;
    this.userForm.patchValue(user);
    console.log(this.currentUserId);
    this.editMode = true;
  }
  deleteUser(id: number) {
    const confirmacion = confirm("¿Estas seguro de eliminar el registro?");
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
      })
    }
  }

  onSubmit() {
    console.log("onSubmit", this.userForm.value);
    if (this.editMode && this.currentUserId) {
      this.userService.updateUser(this.currentUserId, this.userForm.value).subscribe(
        () => {
          this.loadUsers()
          this.resetForm();
        }
      )
    }
    else {
      this.userService.createUser(this.userForm.value).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      })
    }


  }

  resetForm() {
    this.userForm.reset();
  }

  openUserModal(user?: User) {
    const modalRef = this.modalService.open(UserFormComponent);
    
    // If a user is passed, set the form to edit mode
    if (user) {
      modalRef.componentInstance.user = user;
      modalRef.componentInstance.isEditMode = true;
    }

    modalRef.result.then((result) => {
      if (result) {
        if (result.id) {
          // Update existing user
          this.userService.updateUser(result.id,result).subscribe(
            () => {
              this.loadUsers()
              this.resetForm();
            }
          )
        } else {
          // Add new user
          this.userService.createUser(result).subscribe(
            () => {
              this.loadUsers()
              this.resetForm();
            }
          )
        }
      }
    }).catch(() => {
      // Modal dismissed
    });
  }

  editarUser(user: User) {
    this.openUserModal(user);
  }

}
