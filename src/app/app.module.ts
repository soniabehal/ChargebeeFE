import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{routing,routes} from "./app.route";
import{services} from "./shared/services/service";
import {components} from"./components";
@NgModule({
  declarations: [
    AppComponent,
    components    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule { }
