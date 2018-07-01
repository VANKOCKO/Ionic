import { UserPage } from '../users/user/user';
import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';



@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage implements OnInit{

  name: String;
  user: { address: string, tel: String, age: number }
  constructor(public navCtrl: NavController, private navParams: NavParams) {
  
  }

  ngOnInit(){
        this.name = this.navParams.get('userName');
  }

  GotoUser( user : {address: string, tel: String, age: number }){
    
      this.navCtrl.push(UserPage, user)
      .catch(
                (error) =>console.log('access denied, Argument was ' + error ));
  }



} 


