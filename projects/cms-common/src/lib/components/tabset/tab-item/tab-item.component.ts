import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ViewChild
} from "@angular/core";
import { ChildComponent, Activatable } from "../../interfaces";
import { TabsetComponent } from "../tabset.component";
import { applyMixins } from "../../comp-utils";

@Component({
  selector: "tab-item",
  templateUrl: "./tab-item.component.html",
  styleUrls: ["./tab-item.component.css"]
})
export class TabItemComponent implements OnInit, ChildComponent, Activatable {
  constructor(
    public containerComp: TabsetComponent,
    public elementRef: ElementRef
  ) {}
  @ViewChild("li") li: ElementRef;
  isActive = false;
  @Output() onActivate: EventEmitter<this> = new EventEmitter();
  @Output() onDeactivate: EventEmitter<this> = new EventEmitter();
  commonActivate: () => void;
  commonDeactivate: () => void;

  activate() {
    this.commonActivate();
    if (this.containerComp && this.containerComp.flagComp) {
      this.containerComp.flagComp.moveTo(this.li.nativeElement.offsetLeft);
      this.containerComp.flagComp.setWidth(this.li.nativeElement.offsetWidth);
    }
  }

  deactivte() {
    this.commonDeactivate();
  }

  @HostListener("click")
  onclick() {
    if (this.containerComp) {
      this.containerComp.childComps.forEach(comp => {
        if (comp == this) comp.activate();
        else comp.deactivte();
      });
    }
  }

  ngOnInit() {
    this.containerComp.addChildComp(this);
  }

  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
applyMixins(TabItemComponent, [Activatable]);
