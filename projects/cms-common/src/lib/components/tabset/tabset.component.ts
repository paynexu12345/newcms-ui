import {
  Component,
  ElementRef,
  HostListener,
  TemplateRef,
  ChangeDetectorRef
} from "@angular/core";
import { TabFlagDirective } from "./flag.directive";
import { slideDownFactory, fadeInDownFactory } from "../../animations";
import { checkIsTouchScreenDevice } from '../../utils';
import { TabDirective } from './tab.directive';

let slideDown = slideDownFactory();
let fadeInDown = fadeInDownFactory(
  "fadeInDown",
  ".3s .4s ease-in-out",
  "-50px"
);
@Component({
  selector: "tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.css"],
  animations: [slideDown, fadeInDown]
})
export class TabSetComponent {
  constructor(public erf: ElementRef, public cdr: ChangeDetectorRef) {}
  tabs: TabDirective[] = [];
  activeTab: TabDirective;
  tabFlag: TabFlagDirective;
  templateRef: TemplateRef<any>;
  isShow = false;
  isTouchScreenDevice = checkIsTouchScreenDevice();
  resizeFlag;
  
  addTab(tab: TabDirective) {
    this.tabs.push(tab);
  }
  creatFlag(tabFlag: TabFlagDirective) {
    this.tabFlag = tabFlag;
  }
  clickTab(tab:TabDirective, htmlElement) {
    if(tab.disabled != 'disabled'){
      this.tabs.forEach(ele => {
        if (ele == tab) {
          ele.active = true;
          ele.onactivate.emit("activate");
          this.activeTab = ele;
        } else {
          if (ele.active == true) {
            if (typeof ele.onLeave == "function") {
              ele.onLeave();
            }
          }
          ele.active = false;
        }
      });
      this.isShow = false;
      if (this.tabFlag) {
        this.tabFlag.width = htmlElement.offsetWidth + "px";
        this.tabFlag.translateX = htmlElement.offsetLeft + "px";
      }
    }
    else{
      tab.disabledClick.emit("disabled")
    }
  }
  exitSelect() {
    this.isShow = false;
  }
  clickActiveOpton() {
    this.isShow = true;
  }
  iconCloseClick() {
    this.exitSelect();
  }
  initTabFlagStyle() {
    if (this.isTouchScreenDevice) {
      this.tabFlag = null;
    } else {
      let activeTabHtmlElement = this.erf.nativeElement.querySelector(
        "li.active"
      );
      if (this.tabFlag && activeTabHtmlElement) {
        this.tabFlag.width = activeTabHtmlElement.offsetWidth + "px";
        this.tabFlag.translateX = activeTabHtmlElement.offsetLeft + "px";
      }
      this.cdr.detectChanges();
    }
  }
  
  @HostListener("window:resize")
  resize() {
    clearTimeout(this.resizeFlag);
    this.resizeFlag = setTimeout(() => {
      this.isTouchScreenDevice = checkIsTouchScreenDevice();
      this.initTabFlagStyle();
    }, 200);
  }
  ngOnInit() {
    this.activeTab = this.tabs[0];
  }
  ngAfterViewInit() {
    this.initTabFlagStyle();
  }
}
