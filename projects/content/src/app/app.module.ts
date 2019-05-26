import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProjectSharedModule } from 'project-shared/project-shared.module';
// import { NgxCmsCommonModule } from 'projects/ngx-cms-common/src/lib/ngx-cms-common.module';
import { ContentHomeComponent } from './content-home/content-home.component';
import { Layout1Component } from './layout/layout1/layout1.component';
import { Layout2Component } from './layout/layout2/layout2.component';
import { HeaderComponent } from './header/header.component';
import { CmsCommonModule } from 'projects/cms-common/src/public-api';
import { EnterCheckComponent } from './enter-check/enter-check.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentHomeComponent,
    Layout1Component,
    Layout2Component,
    EnterCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpModule,
    CmsCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
