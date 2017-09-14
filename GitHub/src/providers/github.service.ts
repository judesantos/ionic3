import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../models/user.interface';
import { USER_LIST } from '../mocks/user.mocks';
import { Repository } from '../models/repository.interface';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';


/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  /**
   * class members
   */

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  /**
   * class c-tor
   */
  constructor(private http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  /**
   * Public member functions
   *
   */

  // live data. get github member profile info
  getUserInfo(username: string):Observable<User> {

    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .map(this.toJson)
      .do(this.logData)
      .catch(this.handleError);
  }

  // live data. get github member repos
  getRepositoryInfo(username: string) : Observable<Repository[]> {

    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do(this.logData)
      .map(this.toJson)
      .do(this.logData)
      .catch(this.handleError);
  }

  // mock data. find git hub user repos
  mockGetRepositoryInfo(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name == username));
  }

  // mock data. Find username from mock db and return result
  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

  /*
   * Private member fucntions
   */

  private logData(response: Response) {
    return console.log(response);
  }

  private toJson(response: Response) {
    return response.json();
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || "Server Error.")
  }
}
