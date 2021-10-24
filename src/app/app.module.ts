import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweriersService} from './breweriers.service';
import { SortPipe } from './sort.pipe';
import { SelectComponent } from './select/select.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreweryDataComponent } from './brewery-data/brewery-data.component'

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    SelectComponent,
    BreweryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [BreweriersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
