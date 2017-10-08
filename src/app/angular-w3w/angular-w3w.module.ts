import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { W3wService } from './services/w3w.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [W3wService]
})
export class AngularW3wModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularW3wModule,
      providers: [W3wService],
    };
  }
}
