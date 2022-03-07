import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class PagesModule { }
