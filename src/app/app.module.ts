import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ShopPage } from '../pages/shop/shop';
import { ProductPage } from '../pages/product/product';
import { StorePage } from '../pages/stores/stores';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Splash } from '../pages/splash/splash';
import { Electroneum } from '../pages/electroneum/electroneum';



@NgModule({
  declarations: [
    MyApp,
    ShopPage,
    ProductPage,
    StorePage,
    HomePage,
    TabsPage,
    Splash,
    Electroneum
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(StorePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShopPage,
    ProductPage,
    Electroneum,
    StorePage,
    HomePage,
    Splash,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
