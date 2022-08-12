import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterDataComponent } from './components/filter-data/filter-data.component';
import { SplitArrayComponent } from './components/split-array/split-array.component';
import { SimpsonCharacterService } from './dataServices/simpson-character.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterDataComponent,
    SplitArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
