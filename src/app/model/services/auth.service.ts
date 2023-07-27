import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDatasource } from '../datasource/rest.datasource';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restDataSource:RestDatasource) { }

  authenticate(username:string,password:string):Observable<boolean>{
    return this.restDataSource.authenticate(username,password);
  }

  get authenticated() : boolean {
    return this.restDataSource.authToken != "";
  }

  clear(){
    this.restDataSource.deleteToken();
  }
}
