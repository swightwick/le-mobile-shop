import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  tshirts: any;

  constructor(public navCtrl: NavController) {
    this.tshirts = [
      { name: 'ABOVE & BELOW', image: 'above-below-tshirt.jpg' },
      { name: 'CREAM', image: 'sprocket.jpg' },
      { name: 'SPROCKET SCRIPT', image: 'cid.jpg'},
      { name: 'CASH RUINS', image: 'cream.jpg'}
      ];
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
