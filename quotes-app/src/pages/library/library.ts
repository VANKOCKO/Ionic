import { QuotesPage } from '../quotes/quotes';
import { Quote } from './../../app/data/quote.interface';
import { Component, OnInit } from '@angular/core';
import quotes from '../../app/data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

    quoteCollection : {category: string, quotes: Quote[], icon: String }[];  
    quotesPage=QuotesPage;
    ngOnInit(){
        this.quoteCollection = quotes;
    }
}
