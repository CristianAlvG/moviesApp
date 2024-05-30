import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    PipesModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

