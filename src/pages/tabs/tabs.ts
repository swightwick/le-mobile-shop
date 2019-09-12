import { Component } from '@angular/core';

import { ShopPage } from '../shop/shop';
import { StorePage } from '../stores/stores';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShopPage;
  tab3Root = StorePage;

  constructor() {

  }
}
