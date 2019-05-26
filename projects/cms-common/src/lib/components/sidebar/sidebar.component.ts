import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Menu } from "./class";
import { hightlightMenuByRouter } from "./highlightMenu.func";
import {
  PageModeService,
  PAGE_MODE_SMALL,
  PAGE_MODE_LARGE
} from "../page-mode";
@Component({
  selector: "sidebar",
  styleUrls: ["./sidebar.component.css"],
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit {
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public elementRef: ElementRef,
    public pageModeService: PageModeService
  ) {}
  PAGE_MODE_LARGE = PAGE_MODE_LARGE;
  PAGE_MODE_SMALL = PAGE_MODE_SMALL;
  _menus: Menu[] = [];
  @Input()
  set menus(val: Menu[]) {
    if (val) this._menus = val;
  }
  get menus() {
    return this._menus;
  }
  ngOnInit() {
    hightlightMenuByRouter(this.router, this.menus);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        hightlightMenuByRouter(this.router, this.menus);
      }
    });
  }
}
