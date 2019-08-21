import { Component, OnInit } from '@angular/core';
import { FrontendComponent } from '../frontend.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends FrontendComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
