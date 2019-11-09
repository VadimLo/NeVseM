import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MDBModalRef} from "angular-bootstrap-md";
import {Subject} from "rxjs";

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  public editableRow: { userId: string,
    firstName: string,
    lastName: string,
    username:string,
    role: string,
    enabled:boolean };
  public saveButtonClicked: Subject<any>   = new Subject();

  public form: FormGroup = new FormGroup({
    userId: new FormControl({value: '', disabled: true}),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    enabled: new FormControl(),
  });

  constructor(public modalRef: MDBModalRef) {
  }

  ngOnInit() {
    this.form.controls['userId'].patchValue(this.editableRow.userId);
    this.form.controls['firstName'].patchValue(this.editableRow.firstName);
    this.form.controls['lastName'].patchValue(this.editableRow.lastName);
    this.form.controls['username'].patchValue(this.editableRow.username);
    this.form.controls['role'].patchValue(this.editableRow.role);
    this.form.controls['enabled'].patchValue(this.editableRow.enabled);
  }

  editRow() {
    this.editableRow = this.form.getRawValue();
    this.saveButtonClicked.next(this.editableRow);
    this.modalRef.hide();
  }

  get first() {
    return this.form.get('firstName');
  }

  get last() {
    return this.form.get('lastName');
  }

  get handle() {
    return this.form.get('role');
  }
  get username() {
    return this.form.get('username');
  }
}

