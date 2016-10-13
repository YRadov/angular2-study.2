import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }      from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroesComponent }   from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
//import { HeroService }     from './heroes/hero.service';
import { Logger }            from './logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroesComponent,
    HeroListComponent,
  ],
  providers: [
    //HeroService,
    Logger
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
