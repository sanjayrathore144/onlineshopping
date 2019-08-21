import { Component, OnInit, ViewEncapsulation, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: [
    './backend.component.css',
    '../../assets/vendors/bootstrap/bootstrap.min.css',
    '../../assets/css/adminlte.min.css',
    '../../assets/vendors/fontawesome-free/css/all.min.css',
    // 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class BackendComponent implements OnInit {

  // constructor(private dynamicScriptLoader: DashboardscriptService) { }
  constructor( private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
    let scripts  = [
      "../../assets/js/jquery.min.js",
      "../../assets/js/adminlte.js",
      "../../assets/vendors/chart.js/Chart.min.js",
      "../../assets/js/demo.js",
      "../../assets/js/pages/dashboard3.js",
    ];
    scripts.forEach((script: any) => {
      let s = this._renderer2.createElement('script');
      s.type = "text/javascript";
      s.src = script;

      this._renderer2.appendChild(this._document.body, s);
    });
  }

}
