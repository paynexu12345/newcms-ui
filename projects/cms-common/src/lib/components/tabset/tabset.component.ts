import { Component, OnInit, Input } from "@angular/core";
import { ContainerComponent, HasConfig } from "../interfaces";
import { TabItemComponent } from "./tab-item/tab-item.component";
import { TabConfig, DEFAULT_TAB_CONFIG } from "./class";
import { TabFlagComponent } from "./tab-flag/tab-flag.component";
import { commonInitCfg, applyMixins } from "../comp-utils";

@Component({
  selector: "tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.css"]
})
export class TabsetComponent
  implements OnInit, ContainerComponent<TabItemComponent>, HasConfig {
  constructor() {}
  childComps: TabItemComponent[] = [];
  flagComp: TabFlagComponent;
  rootCssClass = "tab";
  reservedCssClasses: string[] = [];
  config: TabConfig = DEFAULT_TAB_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }
  addChildComp: (comp: TabItemComponent) => void;
  removeChildComp: (comp: TabItemComponent) => void;

  ngOnInit() {
    setTimeout(() => {
      this.childComps[this.config.activeIndex].activate();
    }, 100);
  }
}
applyMixins(TabsetComponent, [ContainerComponent]);
