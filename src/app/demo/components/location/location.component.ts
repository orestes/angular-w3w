import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

// Dependencies
import { GeolocationService } from '../../services/geolocation.service';
import { W3wService } from '../../../angular-w3w/services/w3w.service';

// Models
import { ReverseApiResponse } from '../../../angular-w3w/models/reverse-api-response.interface';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-demo-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent {

  public latitude: number;
  public longitude: number;

  public error$: Subject<Error> = new Subject();
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public coordinatesInput$: BehaviorSubject<string> = new BehaviorSubject(null);
  public coordinates$: Observable<number[]>;
  public reverse$: Observable<ReverseApiResponse>;

  constructor(
    private w3w: W3wService,
    private geolocationService: GeolocationService,
  ) { }

  public runReverse() {
    this.loading$.next(true);
    this.reverse$ = this.w3w.getReverse(this.latitude, this.longitude)
      .do(() => this.loading$.next(false));
  }

  public updateCurrentPosition(): void {
    this.loading$.next(true);

    this.geolocationService.getCurrentPosition()
      .do(() => this.loading$.next(false)) // Hide spinner
      .catch(err => { // catch errors
        this.error$.next(err); // emit errors separately
        return null;
      })
      .filter(v => !!v) // skip nulls
      .subscribe((position: Position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
  }
}
