import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import {routing} from './app.routing';
import { PostsService } from './services/posts.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PostsService ]
})
export class AppModule { }
