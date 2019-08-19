import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var document:any;
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
  public scriptsAr:any = ["bower_components/jquery/dist/jquery.min.js","bower_components/jquery-ui/jquery-ui.min.js","bower_components/bootstrap/dist/js/bootstrap.min.js","bower_components/raphael/raphael.min.js","bower_components/morris.js/morris.min.js","bower_components/jquery-sparkline/dist/jquery.sparkline.min.js","plugins/jvectormap/jquery-jvectormap-1.2.2.min.js","plugins/jvectormap/jquery-jvectormap-world-mill-en.js","bower_components/jquery-knob/dist/jquery.knob.min.js"];
  constructor() { }

  ngOnInit() {
    var i=0;
    for(i=0;i<this.scriptsAr.length;i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = '../../assets/admin/'+this.scriptsAr[i];
      document.getElementById("jsDiv").appendChild(s);
    }
  }

}
