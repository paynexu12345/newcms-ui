import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderNavComponent } from "../header-nav.component";
import { HeaderNavItem } from "../class";

@Component({
  selector: "header-nav-item",
  templateUrl: "./header-nav-item.component.html"
})
export class HeaderNavItemComponent implements OnInit {
  constructor(private _navComp: HeaderNavComponent, public router: Router) {
    this.navComp = _navComp;
  }
  navComp: HeaderNavComponent;

  @Input()
  config: HeaderNavItem;

  ngOnInit() {
    this.navComp.addItem(this);
  }
}
