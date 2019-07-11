import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-layout',
  styleUrls: [ './panel-layout.component.css'],
  templateUrl: './panel-layout.component.html',
})
export class PanelLayoutComponent implements OnInit {

  toggleOptions: ToggleOptions = {
    target: 'body',
    targetState: 'kt-header__topbar--mobile-on',
    togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
  };

  constructor() { }

  ngOnInit() {
  }

}

export interface ToggleOptions {
  target?: string;
  targetState?: string;
  togglerState?: string;
}
