import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Dependencies
import { AngularW3wModule } from './angular-w3w/angular-w3w.module';
import { DemoModule } from './demo/demo.module';

// Components
import { AppComponent } from './app.component';

// services
import { GeolocationService } from './demo/services/geolocation.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AngularW3wModule.forRoot(),
    DemoModule,
  ],
  providers: [
    GeolocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
