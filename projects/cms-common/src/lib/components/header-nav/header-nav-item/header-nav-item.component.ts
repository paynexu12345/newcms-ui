import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderNavComponent } from "../header-nav.component";
import { HeaderNavItemConfig } from "../class";
import { commonInitCfg } from '../../comp-utils';
import { HasConfig } from '../../interfaces';

@Component({
  selector: "header-nav-item",
  templateUrl: "./header-nav-item.component.html"
})
export class HeaderNavItemComponent implements OnInit,HasConfig {
  constructor(public navComp: HeaderNavComponent, public router: Router) {}
  config: HeaderNavItemConfig;
  rootCssClass = "item";
  reservedCssClasses: string[] = [];
  @Input("config")
  set _config(val) {
    commonInitCfg(this,val);
  }

  ngOnInit() {
    this.navComp.addItem(this);
  }
}
