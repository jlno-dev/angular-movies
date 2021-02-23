import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './ui/menu/menu.component';
import { ExplorerComponent } from './ui/explorer/explorer.component';
import { GridDetailComponent } from './ui/grid-detail/grid-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExplorerComponent,
    GridDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
