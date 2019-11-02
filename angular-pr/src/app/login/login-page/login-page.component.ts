import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../alert";
import htmlToImage from 'html-to-image';
import {ResizeEvent} from "angular-resizable-element";
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";

declare const require: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  netImage:any = "../assets/qw.jpg";
  netImageTs:any = "../assets/tshirt-alfa.png";
  netImageMask:any = "../assets/mask.png";
  model: any = {};
  loading = false;
  returnUrl: string;
  errorMessage: string;
  img:any;
  height: number = 400;
  width:number = 400;
  drag:boolean=true;

  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  // demo_html = require('html-loder!./login-page.component.html');
  // demo_ts = require('raw-loader!./login-page.component.ts');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  singUpRedirect(){
    this.router.navigate(['/singup']);
  }

  login() {
    this.loading = true;
    this.errorMessage = null;
    this.authService.login(this.model.username, this.model.password)
      .flatMap(data => {
        return this.authService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
          this.success("You successfully login")
        },
        error => {
          this.loading = false;
          this.errorMessage = error;
          this.errorMes("Incorrect username or password. Please try again.");
        }
      );
  }
  success(message: string) {
    this.alertService.success(message);
  }

  errorMes(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }

  renderImage(){


    htmlToImage.toPng(document.getElementById('screen')).then(dataUrl=> {

       this.img = new Image();
      this.img.src = dataUrl;
      document.getElementById("screensh").appendChild(this.img);
    })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  onDrag(event:DragEvent){
    if(event){
      console.log("Two events")

    }else{
      console.log("one event or 0")
    }

  }

  onResizeEnd(event: ResizeEvent): void {
    if (event) {
      this.drag=true;
      //console.log(event);
      if (event.rectangle.height != null) {
        this.height = event.rectangle.height;
        this.width = event.rectangle.width;

      }
    }
  }

  startResize(event:ResizeEvent){
    this.drag=false

  }
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
  removeImage(){
    document.getElementById("mainIm").remove();
  }


  //uploadfile


  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
