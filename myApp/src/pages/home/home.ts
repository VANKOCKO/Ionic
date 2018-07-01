import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: String;
  constructor(public navCtrl: NavController) {
  }
  OnUsersPage(name: String){
    this.navCtrl.push(UsersPage, {userName : name});
  }

  OnShopPage(){
    this.navCtrl.push(ShopPage);
    
}


}
