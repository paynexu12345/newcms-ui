import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { BreadcrumbComponent } from './components/breadcrumb';

@NgModule({
  declarations: [
    SidebarMiniComponent,
    SidebarLargeComponent,
    SidebarComponent,
    LogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    BreadcrumbComponent
  ],
  imports: [CommonModule, RouterModule,BrowserAnimationsModule],
  exports: [
    SidebarMiniComponent,
    SidebarLargeComponent,
    SidebarComponent,
    LogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    BreadcrumbComponent
  ],
  providers: [PageModeService]
})
export class CmsCommonModule {}
