import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive'; 
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        RemoveSpacesPipe,
        InputFormatDirective,
        HeroDetailComponent // Declare the directive here
      ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }