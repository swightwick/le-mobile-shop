import { NgModule } from '@angular/core';
import { StorePage} from './stores';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [StorePage],
  imports: [IonicPageModule.forChild(StorePage)],
  entryComponents: [StorePage]
})
export class StorePageModule { }


