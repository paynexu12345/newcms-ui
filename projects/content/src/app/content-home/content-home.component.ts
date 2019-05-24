import { Component, OnInit } from '@angular/core';
import { CmsLayout1Config } from 'project-shared/layout/layout.class';
import { generateActiveNavItem } from 'project-shared/components/cms-header/cms-header-nav/generateActiveNavItem';
import { ID_CONTENT, FROM_INDEX } from 'project-shared/constant';
import { PageModeService } from 'projects/ngx-cms-common/src/public-api';
import { CMS_MENUS } from '../../config';
import { CmsBreadcrumb } from 'projects/ngx-cms-common/src/lib/controls/cms-breadcrumb/cms-breadcrumb';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent implements OnInit {

  constructor(public pageModeService:PageModeService) { }
  breadcrumbConfig:CmsBreadcrumb[] = [
    {
      name:"Content Home",
    }
  ];
  cmsLayout1Config:CmsLayout1Config = {
    header: {
      nav: {
        items: generateActiveNavItem(ID_CONTENT)
      }
    },
    sidebar: {
      menus: CMS_MENUS[0].menus,
      fromIndex: FROM_INDEX
    }
  }
  ngOnInit() {
  }

}
