import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    selector: 'user-page',
    templateUrl: 'user.html'
})


export class UserPage {
   
    user: {address: string, tel: string, age: number};

    constructor( public  NavParams : NavParams){
        this.user=this.NavParams.data;
    }
   
}