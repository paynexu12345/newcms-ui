import { Component } from "@angular/core";
import {
  PageModeService,
  PAGE_MODE_LARGE,
  PAGE_MODE_SMALL
} from "projects/cms-common/src/lib/components/page-mode";
@Component({
  selector: "logo",
  template: `
    <a href="javascript:;" class="logo" [style.width]="pageModeService.width">
      <span
        class="iconfont icon-logo"
        *ngIf="pageModeService.pageMode == PAGE_MODE_LARGE"
      ></span>
      <span class="text" *ngIf="pageModeService.pageMode == PAGE_MODE_SMALL">CMS</span>
    </a>
  `
})
export class LogoComponent {
  constructor(public pageModeService: PageModeService) {}
  PAGE_MODE_LARGE = PAGE_MODE_LARGE;
  PAGE_MODE_SMALL = PAGE_MODE_SMALL;
}
