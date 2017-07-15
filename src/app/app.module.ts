import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { JsonpModule, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {CardAppPage} from "./CA/cardApp.component";
import {AdminPage} from "./PA/admin.component";
import {SubmitAppService} from "./Services/submitApp.service";


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      {
        path: 'cardApp',
        component: CardAppPage
      },
      {
        path: 'admin',
        component: AdminPage
      }
    ])
  ],
  providers: [ SubmitAppService],
  declarations: [ AppComponent, AdminPage, CardAppPage ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
