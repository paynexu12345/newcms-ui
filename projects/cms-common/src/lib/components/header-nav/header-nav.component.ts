import { Component, OnInit } from "@angular/core";
import { HeaderNavItemComponent } from "./header-nav-item/header-nav-item.component";

@Component({
  selector: "header-nav",
  templateUrl: "header-nav.component.html"
})
export class HeaderNavComponent implements OnInit {
  constructor() {}
  items = [];
  addItem(item: HeaderNavItemComponent) {
    this.items.push(item);
  }
  ngOnInit() {}
}
