import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


import * as fabric from 'fabric';
import amar from "../../assets/bootstrap.js";
import b from "../../assets/fabric.js";
import c from "../../assets/bootstrap.min.js";
import d from "../../assets/caseEditor.js";
import e from "../../assets/excanvas.js";
import f from "../../assets/jquery.miniColors.min.js";
import g from "../../assets/tshirtEditor.js";
import htmlToImage from "html-to-image";
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";
import {UserService} from "../user.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss',
    './css/bootstrap.min.css',
    './css/bootstrap-responsive.css',
    './css/bootstrap-responsive.min.css',
    './css/jquery.miniColors.css',
    './css/jquery.simplecolorpicker.css',
  ],


})
export class UserPageComponent implements OnInit {
  img: any;
  upImage: any ;

  crew_front: any = "../assets/img/crew_front.png";
  invisibleman:any= "../assets/img/invisibleman.jpg";
  font_bold:any="../assets/img/font_bold.png";
  font_italic:any="../assets/img/font_italic.png";
  font_strikethrough:any="../assets/img/font_strikethrough.png";
  font_underline:any="../assets/img/font_underline.png";
  e: any = "src";
  constructor(private userService: UserService, private authService: AuthService) {
    this.loadScript();


  }

  flip(){
    this.loadScript8();

    this.loadScript1();

    this.loadScript4();
    this.loadScript6();
    this.loadScript5();
    this.loadScript3();
    //this.loadScript7();
  }
  ngOnInit() {



  }

  renderImage1() {


    htmlToImage.toPng(document.getElementById('shirtDiv')).then(dataUrl => {
      console.log(dataUrl);
      this.img = new Image();
      this.img.src = dataUrl;
      document.getElementById("screensh").appendChild(this.img);
      this.userService.saveImg(dataUrl).subscribe();
    })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

  }


  imgURL: any;
  isHidden:boolean =true;
  public files: NgxFileDropEntry[] = [];
  // preview:any;
  // reader:any;

  dropped(files:NgxFileDropEntry[]){
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          var reader = new FileReader();
          var preview = new Image();
          reader.readAsDataURL(file);
          //preview = document.querySelector("img");
          reader.onload = (_event) => {
            this.imgURL = reader.result;
          };

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.upImage = new Image();
          //preview.src ="pic.jpg";
          this.upImage = file;
          this.isHidden=false;


          // var imageElement = document.createElement('img');
          // imageElement.className = 'img-polaroid';
          // imageElement = this.imgURL;
          //
          // document.getElementById("avatarlist").appendChild(imageElement);
          //document.getElementById("screensh").appendChild(preview.);
          /**
           // You could upload it like this:const formData = new FormData()
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

  fileOver(event)
  {
    console.log(event);
  }


  fileLeave(event)
  {
    console.log(event);
  }






  public loadScript() {
    let body = <HTMLDivElement> document.head;
    let script = document.createElement('script');
    //script.innerHTML
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  public loadScript1() {

    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    //script.innerHTML
    script.src = './assets/fabric.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;

    body.appendChild(script);
  }

  public loadScript3() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');

    script.src = './assets/sc.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public loadScript4() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    //script.innerHTML
    script.src = './assets/bootstrap.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public loadScript5() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    //script.innerHTML
    script.src = './assets/tshirtEditor.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public loadScript6() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    //script.innerHTML
    script.src = './assets/jquery.miniColors.min.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public loadScript7() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = ' var _gaq = _gaq || [];\n' +
      '  _gaq.push([\'_setAccount\', \'UA-35639689-1\']);\n' +
      '  _gaq.push([\'_trackPageview\']);\n' +
      '  (function() {\n' +
      '    var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n' +
      '    ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n' +
      '    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n' +
      '  })();';
    //script.src = 'angular-pr/src/app/user-page/js/jquery.miniColors.min.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public loadScript8() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML= '$(document).ready(function(){\n' +
      '   $("#tshirttype").change(function(){\n' +
      '     $("img[name=tshirtview]").attr("src",$(this).val());\n' +
      '\n' +
      '   });\n' +
      '\n' +
      '});  ';
    //script.src = 'angular-pr/src/app/user-page/js/jquery.miniColors.min.js';
    script.type ="text/javascript";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
