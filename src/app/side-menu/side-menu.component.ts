import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayMenu(): void {
    $('#wrapper').toggleClass('toggled');
  }

}
