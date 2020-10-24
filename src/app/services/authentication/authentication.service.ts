import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  constructor() { }

  registerUser(value: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  loginUser(value: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  logoutUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            resolve();
          }).catch(() => reject());
      }
    })
  }

  userDetails(): firebase.User {
    return firebase.auth().currentUser;
  }

  get isAuthenticated(): boolean {
    return !!this.userDetails();
  }
}