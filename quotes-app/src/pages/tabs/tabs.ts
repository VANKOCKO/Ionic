import { LibraryPage } from '../library/library';
import { FavoritesPage } from '../favorites/favorites';
import { Component } from "@angular/core";

@Component({
    selector:'page-tabs',
    template:
    `
            <ion-tabs>
                  <ion-tab [root]="FavoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>    
                  <ion-tab [root]="LibraryPage" tabTitle="Library" tabIcon="book"></ion-tab>    
             </ion-tabs> 
      ` 
})
export class TabsPage{

    FavoritesPage=FavoritesPage;
    LibraryPage=LibraryPage;

}