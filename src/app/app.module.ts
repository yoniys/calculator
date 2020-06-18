import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InputnumComponent } from './comps/inputnum/inputnum.component';
import { HistorylistComponent } from './comps/historylist/historylist.component';

@NgModule({
  declarations: [
    AppComponent,
    InputnumComponent,
    HistorylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
