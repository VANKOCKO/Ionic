import { OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import {Quote} from '../../app/data/quote.interface';
import { QuotesService } from './../../app/services/quotes';
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

    quoteGroup: {category:string,quotes: Quote[], icon: string};
    constructor(
          private NavParams:NavParams,
          private AlertCtrl : AlertController,
          private QuotesService : QuotesService){
                 
   }
   
   //ionViewDidLoad(){
     // this.quoteGroup = this.NavParams.data;
   //}
   // Add elvis operator (?) in template to use this approach 

   ngOnInit(){
      this.quoteGroup =this.NavParams.data;
   }

   onAddToFavorite(selectedQuote : Quote){
        const alert =this.AlertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote ?',
            buttons: [
              {
                text : 'Yes, go ahead',
                handler:() => {
                      this.QuotesService.addQuoteToFavorites(selectedQuote);
                }
              },
              {
                text :'No, I changer my mind !',
                handler: ()=> {
                    console.log('Cancelled');
                }
              }
            ]
      });
      alert.present();
   }

}
