import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../shared/uploadfile.service';

@Component({
  selector: 'app-filehandler',
  templateUrl: './filehandler.component.html',
  styleUrls: ['./filehandler.component.css']
})
export class FilehandlerComponent implements OnInit {

  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  selectedFile = null;
  changeImage = false;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  change($event) {
    this.changeImage = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploadFile(this.currentFileUpload).subscribe(response => {
      console.log(response);
    })
  }
}
