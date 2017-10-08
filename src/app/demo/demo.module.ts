import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dependencies
import { FormsModule } from '@angular/forms';

// Components
import { ConfigComponent } from './components/config/config.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LocationComponent } from './components/location/location.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ConfigComponent,
    LanguagesComponent,
    LocationComponent,
    InfoComponent,
  ],
  exports: [
    ConfigComponent,
    LanguagesComponent,
    LocationComponent,
    InfoComponent,
  ],
})
export class DemoModule { }
