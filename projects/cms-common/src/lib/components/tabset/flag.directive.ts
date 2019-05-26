import {
  Directive
} from "@angular/core";
import { TabSetComponent } from "./tabset.component";
@Directive({
  selector: "tab-flag"
})
export class TabFlagDirective {
  private tabset: TabSetComponent;

  constructor(tabset: TabSetComponent) {
    this.tabset = tabset;
  }
  ngOnInit() {
    this.tabset.creatFlag(this);
  }

  private _width = "0px";
  set width(width: string) {
    this._width = width;
  }
  get width() {
    return this._width;
  }

  private _translateX = "0px";
  set translateX(x: string) {
    this._translateX = x;
  }
  get translateX() {
    return this._translateX;
  }
}
