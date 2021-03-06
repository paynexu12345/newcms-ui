import { Component, OnInit, Input } from "@angular/core";
import { CarouselItemComponent } from "./carousel-item/carousel-item.component";
import { CarouselConfig, DEFAULT_CAROUSEL_CONFIG } from "./class";
import { ContainerComponent, HasConfig } from "../interfaces";
import { commonInitCfg, applyMixins } from "../comp-utils";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent
  implements OnInit, ContainerComponent<CarouselItemComponent>, HasConfig {
  constructor() {}
  stageWidth: number = 0;
  stageHeight = 0;
  translateX = 0;
  autoPlayIntervalId = null;
  childComps: CarouselItemComponent[] = [];
  rootCssClass = "carousel";
  reservedCssClasses: string[] = [];
  config: CarouselConfig = DEFAULT_CAROUSEL_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
    this.init();
  }

  addChildComp: (item: CarouselItemComponent) => void;

  removeChildComp: (item: CarouselItemComponent) => void;

  setStageSize(cfg: CarouselConfig) {
    this.stageWidth = cfg.width;
    this.stageHeight = cfg.height;
  }

  showItem(i: number) {
    if (i >= 0 && i < this.childComps.length) {
      this.translateX = -i * this.stageWidth;
    }
    this.childComps.forEach((c, j) => {
      if (i == j) c.activate();
      else c.deactivte();
    });
  }

  showPrevItem() {
    if (this.config.activeIndex > 0) this.config.activeIndex--;
    else this.config.activeIndex = this.childComps.length - 1;
    this.showItem(this.config.activeIndex);
  }

  showNextItem() {
    if (this.config.activeIndex < this.childComps.length - 1) this.config.activeIndex++;
    else this.config.activeIndex = 0;
    this.showItem(this.config.activeIndex);
  }
  stopAutoPlay() {
    if (this.autoPlayIntervalId) clearInterval(this.autoPlayIntervalId);
  }

  init() {
    if (!this.stageHeight) {
      this.setStageSize(this.config);
      setTimeout(() => {
        this.showItem(this.config.activeIndex);
      }, 0);
      if (this.config.autoPlay && !this.autoPlayIntervalId)
        this.autoPlayIntervalId = setInterval(() => {
          this.showNextItem();
        }, this.config.autoPlayInterval);
    }
  }

  ngOnInit() {
    this.init();
  }
}
applyMixins(CarouselComponent, [ContainerComponent]);
