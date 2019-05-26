import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  SidebarMiniComponent,
  SidebarLargeComponent,
  SidebarComponent
} from "./components/sidebar";
import { PageModeService } from "./components/page-mode";
import { LogoComponent } from "./components/logo";
import {
  HeaderNavComponent,
  HeaderNavItemComponent
} from "./components/header-nav";

@NgModule({
  declarations: [
    SidebarMiniComponent,
    SidebarLargeComponent,
    SidebarComponent,
    LogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarMiniComponent,
    SidebarLargeComponent,
    SidebarComponent,
    LogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent
  ],
  providers: [PageModeService]
})
export class CmsCommonModule {}
