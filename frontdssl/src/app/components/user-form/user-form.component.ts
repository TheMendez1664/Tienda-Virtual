import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup ;
  submitted = false;
  user: User | undefined;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { 

    //this.userForm!

  }

  ngOnInit() {
    // Initialize form with either existing user data or empty fields
   console.log(this.user);
   this.userForm = this.fb.group({
    id: [this.user?.id],
    name: [this.user?.name || '', Validators.required],
    email: [this.user?.email || '', [Validators.required, Validators.email]]
  });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.userForm?.valid) {
      this.activeModal.close(this.userForm.value);
    }
  }
}
