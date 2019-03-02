import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeviewService {
  

  getTreeData () {
    return (this.http.get('../assets/data/treeView.json'));
  }

  constructor(private http : HttpClient) { }
}
