import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  items = [
    'Special Offers',
    'T-shirts',
    'Sweatshirts',
    'Shorts',
    'Hats',
    'Accessories'
  ];

  // itemSelected(item: string) {
  //   console.log("Selected Item", item);
  // }

  constructor(public navCtrl: NavController) {

  }
  aboveBelowLink(){
    this.navCtrl.push(ProductPage);
  }

  itemSelected(event, item) {
    console.log("Selected Item", item);
    this.navCtrl.push(ProductPage, {
      item: item
    });
  }

}
