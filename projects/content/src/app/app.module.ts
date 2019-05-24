import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectSharedModule } from 'project-shared/project-shared.module';
import { NgxCmsCommonModule } from 'projects/ngx-cms-common/src/lib/ngx-cms-common.module';
import { ContentHomeComponent } from './content-home/content-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProjectSharedModule,
    NgxCmsCommonModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
