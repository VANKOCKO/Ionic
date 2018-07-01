import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {


  name: String;
  productData : {name :String, quantity : number };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productData=this.navParams.data;
  }

  HomePage(){
    this.navCtrl.push(HomePage);
  }

  ConfirmToBuy(){

        this.navCtrl.popToRoot();    
  }

}
