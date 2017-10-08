import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Language } from '../../../angular-w3w/models/language.interface';
import { W3wService } from '../../../angular-w3w/services/w3w.service';

@Component({
  selector: 'app-demo-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.sass']
})
export class LanguagesComponent {

  public loading$: Subject<boolean> = new Subject();

  public languages$: BehaviorSubject<Language[]> = new BehaviorSubject([]);

  constructor(
    private w3w: W3wService,
  ) { }

  public loadLanguages() {
    this.loading$.next(true);

    const sub = this.w3w.getLanguages().subscribe((list) => {
      this.loading$.next(false);
      sub.unsubscribe();
      return this.languages$.next(list);
    });
  }

}
