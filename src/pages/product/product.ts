import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

constructor(public actionSheetCtrl: ActionSheetController) {}

  presentActionSheet() {

  var displaySize = document.getElementsByClassName('cta--productSize');
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Select item size',
    buttons: [
      {
        text: 'Small',
        handler: () => {
          console.log('Small clicked');
          displaySize[0].innerHTML = 'Size: Small'
        }
      },
      {
        text: 'Medium',
        handler: () => {
          console.log('Medium clicked');
          displaySize[0].innerHTML = 'Size: Medium'
        }
      },
      {
        text: 'Large',
        handler: () => {
          console.log('Large clicked');
          displaySize[0].innerHTML = 'Size: Large'
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  actionSheet.present();
  }

  cartAnimation(){
    var basketCounter = document.getElementById('basket--counter');
    console.log(basketCounter)
    basketCounter.innerHTML = '1';
  }

}
