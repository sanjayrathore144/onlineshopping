import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
export class FrontendComponent implements OnInit { 

  constructor() { }

  ngOnInit() {
  }

}
