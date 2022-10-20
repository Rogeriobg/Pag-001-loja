import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from 'primeng/splitter';
import { LojaComponent } from './loja/loja.component';
import { StockComponent } from './stock/stock.component';
import { SociosComponent } from './socios/socios.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    StockComponent,
    SociosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PanelModule,
    SplitterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
