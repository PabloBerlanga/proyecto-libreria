import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) { }

  loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }


  register({correo,password}: any){
    return createUserWithEmailAndPassword(this.auth,correo,password);
  }

  login({correo,contra}: any){
    return signInWithEmailAndPassword(this.auth,correo,contra);
  }

  logOut(){
    return signOut(this.auth);
  }

  getUser(){
    const auth = getAuth()
    return auth.currentUser?.email;
  }

}
