import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { 
  }

  uploadFile(file: File):Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);

    return this.httpClient.post('http://localhost:8080/api/file/file-upload', data, { responseType: 'text'});
  }
}
