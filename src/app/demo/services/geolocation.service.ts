import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class GeolocationService {

  public getCurrentPosition(): Observable<Position> {
    return Observable.fromPromise(this.getBrowserCurrentPosition());
  }

  private getBrowserCurrentPosition(): Promise<Position> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        throw new Error('Browser does not support geolocation');
      }

      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
}
