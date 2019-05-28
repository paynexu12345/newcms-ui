import { Component, OnInit, Input } from "@angular/core";
import { HeaderNavItemComponent } from "./header-nav-item/header-nav-item.component";
import { HeaderNavConfig, DEFAULT_HEADER_NAV_CONFIG } from "./class";
import { commonInitCfg } from '../comp-utils';
import { HasConfig } from '../interfaces';

@Component({
  selector: "header-nav",
  templateUrl: "header-nav.component.html"
})
export class HeaderNavComponent implements OnInit,HasConfig {
  constructor() {}
  items: HeaderNavItemComponent[] = [];
  config = DEFAULT_HEADER_NAV_CONFIG;
  rootCssClass = "nav";
  reservedCssClasses: string[] = [];
  @Input("config")
  set _config(val) {
    commonInitCfg(this,val);
  }
  addItem(item: HeaderNavItemComponent) {
    this.items.push(item);
  }
  ngOnInit() {}
}
