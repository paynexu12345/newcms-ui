import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CarouselComponent } from "../carousel.component";
import { ChildComponent, Activatable } from "../../interfaces";
import { applyMixins } from '../../comp-utils';

@Component({
  selector: "carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.css"]
})
export class CarouselItemComponent implements OnInit, ChildComponent,Activatable {
  constructor(public containerComp: CarouselComponent) {}
  isActive = false;
  @Output() onActivate: EventEmitter<this> = new EventEmitter();
  @Output() onDeactivate: EventEmitter<this> = new EventEmitter();
  commonActivate: () => void;
  commonDeactivate: () => void;
  activate() {
    this.commonActivate();
  }

  deactivte() {
    this.commonDeactivate();
  }
  ngOnInit() {
    this.containerComp.addChildComp(this);
  }
  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
applyMixins(CarouselItemComponent, [Activatable]);
