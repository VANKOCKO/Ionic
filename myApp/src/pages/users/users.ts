import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';



@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage implements OnInit{

  name: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
  
  }

ngOnInit(){
      this.name = this.navParams.get('userName');
}
}
