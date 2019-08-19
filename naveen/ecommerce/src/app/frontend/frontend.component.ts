import { Component, OnInit, ViewEncapsulation, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var document:any;
@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: [
    './frontend.component.css', 
    '../../assets/vendors/bootstrap/bootstrap.min.css',
    // '../../assets/vendors/fontawesome/css/all.min.css', 
     '../../assets/vendors/themify-icons/themify-icons.css',
     '../../assets/vendors/nice-select/nice-select.css',
     '../../assets/vendors/owl-carousel/owl.theme.default.min.css',
     '../../assets/vendors/owl-carousel/owl.carousel.min.css',
     '../../assets/css/style.css' 
  ],
  encapsulation: ViewEncapsulation.None
})
export class FrontendComponent {
  public scriptsAr:any = ["vendors/jquery/jquery-3.2.1.min.js","vendors/bootstrap/bootstrap.bundle.min.js","vendors/skrollr.min.js","vendors/owl-carousel/owl.carousel.min.js","vendors/owl-carousel/owl.carousel.min.js","vendors/nice-select/jquery.nice-select.min.js","vendors/jquery.ajaxchimp.min.js","vendors/mail-script.js","js/main.js","js/test.js"];
 
  /*constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
*/
  ngOnInit() {
    var i=0;
    for(i=0;i<this.scriptsAr.length;i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = '../../assets/'+this.scriptsAr[i];
      document.getElementById("jsDiv").appendChild(s);
    }
  }

}
