import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {


  name : String;
  constructor(public navCtrl: NavController) {
  }

  OnBuyoutPage(){
    this.navCtrl.push(BuyoutPage);
  }
  
  OnBuyoutPageFruits(productData : {name: string, quantity: number}){
    this.navCtrl.push(BuyoutPage, productData);
  }

}
