import {
  Directive,
  Input,
  HostListener,
  TemplateRef,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { TabSetComponent } from "./tabset.component";
@Directive({
  selector: "cms-tab"
})
//constructor实例化时，无法获取到@Input()指定的属性，因此不能将关联@Input()属性的逻辑写到constructor中,只能写到ngOnInit中,但是又不能不用construtor注入；ngOnInit时，父对象已存在若干个本组件实例，无法触发length===1的判断，故需要将length===1逻辑拆分至constructor中执行。
//constructor与ngOnInit均无法完成全部的逻辑，必须各写一部分。
export class TabDirective {
  @Input() heading;

  //最好是不用了，用下面的onleave
  @Input() onLeave:Function;
  @Input() hidden = false;

  private tabset: TabSetComponent;
  templateRef: TemplateRef<any>;
  @HostBinding("class.cms-tab-content-pane") pane = true;
  @HostBinding("class.padding-15") p15= true;
  @HostBinding("class.active")
  @Input()
  active: boolean | string = false;

  @Input() disabled = 'false';

  @Output() disabledClick = new EventEmitter();

  @Output() onactivate = new EventEmitter();

  @Output() onleave = new EventEmitter();

  set _active(val:boolean){
    if(val==false){
      if(typeof this.onLeave=="function"){
        this.onLeave();
        this.onleave.emit("leaving")
      }
    }
    this._active = val;
  }
  constructor(tabset: TabSetComponent) {
    this.tabset = tabset;
    this.tabset.addTab(this);
    //默认将第一个tab设为active，后面如果有人为指定active的项，将在ngOnInit中进行检测
    if (this.tabset.tabs.length == 1) {
      this.active = true;
      this.tabset.activeTab = this;
    } else {
      this.active = false;
    }
  }
  ngOnInit() {
    if (this.active === "true" && !this.hidden) {
      this.tabset.tabs.forEach(element => {
        if (element == this) {
          this.tabset.activeTab = this;
        } else {
          element.active = false;
        }
      });
    }
  }
  ngOnChanges() {
    let leftTabs = [];
    let hasActive = false;
    this.tabset.tabs.map(tab => {
      if (!tab.hidden) {       
        leftTabs.push(tab);
        if (tab.active) {
          this.tabset.activeTab = tab;
          hasActive = true;
        }
      }
      else {
        if (tab.active) {
          tab.active = false;
          this.onLeave();
        }
      }
    });
    if (!hasActive) {
      if (leftTabs.length > 0) {
        this.tabset.activeTab = leftTabs[0];
        leftTabs[0].active = true;
        this.tabset.tabFlag.width = leftTabs[0].offsetWidth + "px";
        this.tabset.tabFlag.translateX = leftTabs[0].offsetLeft + "px";
      }
    }
  }
}
