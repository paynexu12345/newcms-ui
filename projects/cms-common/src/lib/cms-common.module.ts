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
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabItemComponent } from './components/tabset/tab-item/tab-item.component';
import { TabFlagComponent } from './components/tabset/tab-flag/tab-flag.component';

@NgModule({
  declarations: [
    SidebarMiniComponent,
    SidebarLargeComponent,
    SidebarComponent,
    LogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    BreadcrumbComponent,
    CarouselComponent,
    CarouselItemComponent,
    TabsetComponent,
    TabItemComponent,
    TabFlagComponent
  ],
  imports: [CommonModule, RouterModule,BrowserAnimationsModule],
  exports: [
    SidebarMiniComponent,
    SidebarLargeComponent,
    SidebarComponent,
    LogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    BreadcrumbComponent,
    CarouselComponent,
    CarouselItemComponent,
    TabsetComponent,
    TabItemComponent,
    TabFlagComponent
  ],
  providers: [PageModeService]
})
export class CmsCommonModule {}
