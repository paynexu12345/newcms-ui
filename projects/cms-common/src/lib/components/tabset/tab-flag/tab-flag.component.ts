import { Component, OnInit } from "@angular/core";
import { ChildComponent } from "../../interfaces";
import { TabsetComponent } from "../tabset.component";
import { TabItemComponent } from "../tab-item/tab-item.component";

@Component({
  selector: "tab-flag",
  templateUrl: "./tab-flag.component.html",
  styleUrls: ["./tab-flag.component.css"]
})
export class TabFlagComponent implements OnInit, ChildComponent {
  constructor(public containerComp: TabsetComponent) {}
  translateX = 0;
  width = 0;
  moveTo(x: number) {
    this.translateX = x;
  }

  setWidth(w: number) {
    this.width = w;
  }

  ngOnInit() {
    this.containerComp.flagComp = this;
  }

  ngOnDestroy() {
    this.containerComp.flagComp = null;
  }
}
