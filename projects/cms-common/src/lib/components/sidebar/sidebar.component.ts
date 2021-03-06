import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Menu, SideBarConfig, DEFAULT_SIDEBAR_CONFIG } from "./class";
import { hightlightMenuByRouter } from "./highlightMenu.func";
import {
  PageModeService,
  PAGE_MODE_SMALL,
  PAGE_MODE_LARGE
} from "../page-mode";
import { HasConfig } from '../interfaces';
import { commonInitCfg } from '../comp-utils';
@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit,HasConfig {
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public elementRef: ElementRef,
    public pageModeService: PageModeService
  ) {}
  PAGE_MODE_LARGE = PAGE_MODE_LARGE;
  PAGE_MODE_SMALL = PAGE_MODE_SMALL;
  config: SideBarConfig = DEFAULT_SIDEBAR_CONFIG;
  rootCssClass = "sidebar";
  reservedCssClasses: string[] = [];
  @Input("config")
  set _config(val) {
    commonInitCfg(this,val);
  }
  get _config() {
    return this.config;
  }
  ngOnInit() {
    hightlightMenuByRouter(this.router, this.config.menus);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        hightlightMenuByRouter(this.router, this.config.menus);
      }
    });
  }
}
