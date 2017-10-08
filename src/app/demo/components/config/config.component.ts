import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

// Dependencies
import { W3wService } from '../../../angular-w3w/services/w3w.service';

@Component({
  selector: 'app-demo-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass'],
})
export class ConfigComponent implements OnInit {

  public apiKey: string = this.w3w.getApiKey();
  public onApiKeyChange$: Subject<string> = new Subject();

  constructor(
    private w3w: W3wService,
  ) { }

  ngOnInit(): void {
    this.onApiKeyChange$.subscribe(key => this.w3w.setApiKey(key));
  }

}
