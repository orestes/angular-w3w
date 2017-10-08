import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

// Models
import { LanguagesAPIResponse } from '../models/languages-api-response';
import { Language } from '../models/language.interface';
import { ReverseApiResponse } from '../models/reverse-api-response.interface';

// Config
import { environment } from '../../../environments/environment';

/**
 * @see https://docs.what3words.com/api/v2
 */
@Injectable()
export class W3wService {

  private apiKey: string = environment.w3w.apiKey;

  private get url(): string {
    return 'https://api.what3words.com/v2';
  }

  constructor(
    private http: HttpClient,
  ) { }

  private assertValidConfig() {
    if (!this.apiKey) {
      throw new Error('API key must be set');
    }
  }

  private getParams(extra: {[key: string]: any} = {}): Observable<HttpParams> {
    return Observable.create((observer: Observer<HttpParams>) => {
      this.assertValidConfig();

      let params = new HttpParams().set('key', this.apiKey);
      // TODO: Use Array.prototype.reduce
      Object.keys(extra).forEach(key => params = params.set(key, extra[key]));

      observer.next(params);
      observer.complete();
    });
  }

  // Config

  public setApiKey(key: string): void {
    console.log('API key changed', key);

    this.apiKey = key;
  }

  public getApiKey(): string {
    return this.apiKey;
  }

  // w3w API methods

  /**
   * Retrieves a list of the currently loaded and available 3 word address languages.
   * @see https://docs.what3words.com/api/v2/#lang
   * @returns {Observable<Language[]>}
   */
  public getLanguages(): Observable<Language[]> {
    return this.getParams()
      .switchMap(params => {
        return this.http.get(`${this.url}/languages`, {params})
          .map((response: LanguagesAPIResponse) => response.languages);
      });
  }

  /**
   * Reverse geocodes coordinates, expressed as latitude and longitude to a 3 word address.
   * @see https://docs.what3words.com/api/v2/#reverse
   * @param {number} latitude
   * @param {number} longitude
   * @param {string} lang
   * @returns {Observable<Language[]>}
   */
  public getReverse(latitude: number, longitude: number, lang: string = 'en'): Observable<ReverseApiResponse> {
    const requestParams = {
      lang,
      coords: [latitude, longitude],
    };

    return this.getParams(requestParams)
      .switchMap(params => this.http.get(`${this.url}/reverse`, {params}));
  }
}
