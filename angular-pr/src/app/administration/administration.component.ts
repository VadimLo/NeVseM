import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../user.service";
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {ModalEditComponent} from "../modal-edit/modal-edit.component";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
 users: any= [];
  errorMessage: string;

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;


  headElements = ['id', 'firstName', 'lastName', 'Username', 'Role','Enabled','command'];

  modalRef: MDBModalRef;
  constructor(private userService: UserService,
              private cdRef: ChangeDetectorRef,
              private modalService: MDBModalService
              ) {

  }

  ngOnInit() {
    this.userService.findAll().subscribe(
      users => this.users = users,
      error => this.errorMessage = error.json().message
    );

    for (let i = 1; i <= 25; i++) {
      this.users.push({id: i.toString(), first: 'User ' + i, last: 'Last ' + i, handle: 'Handle ' + i});
    }

    this.mdbTable.setDataSource(this.users);
    this.users = this.mdbTable.getDataSource();
  }


  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(8);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  editRow(el: any) {
    const elementIndex = this.users.findIndex((elem: any) => el === elem);
    const modalOptions = {
      data: {
        editableRow: el
      }
    };
    this.modalRef = this.modalService.show(ModalEditComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe((newElement: any) => {
      this.users[elementIndex] = newElement;
      console.log(this.users[elementIndex]);
      this.userService.update(this.users[elementIndex]).subscribe();
    });
    this.mdbTable.setDataSource(this.users);
  }

  removeRow(el: any) {
    const elementIndex = this.users.findIndex((elem: any) => el === elem);
    //this.mdbTable.removeRow(elementIndex);

    this.users = this.users.filter(item => item.userId != el.userId);
    this.userService.deleteOne(el.userId).subscribe();
    this.mdbTable.setDataSource(this.users);
  }
}


