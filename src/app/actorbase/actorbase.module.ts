import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { ActorConfig } from './actor-config';

const config = {
    apiKey: "AIzaSyAKFgtLOkl1OmrSeIwLWCnpZTNZ1t-EaX4",
    authDomain: "actor-template.firebaseapp.com",
    databaseURL: "https://actor-template.firebaseio.com",
    storageBucket: "actor-template.appspot.com",
    messagingSenderId: "315773531226"
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(config)
  ],
  declarations: []
})
export class ActorbaseModule { }
