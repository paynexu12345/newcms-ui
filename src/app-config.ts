import { HeaderNavItem } from 'projects/cms-common/src/lib/components/header-nav';
export const _APP_CONTENT_NAME = "content";
export const _APP_PRODUCT_NAME = "product";
export const NAVITEM_ID_HOME = 1;
export const NAVITEM_ID_CONTENT = 2;
export const NAVITEM_ID_CUSTOMER = 3;
export const HEADER_NAVS:HeaderNavItem[] = [
  {
    id:NAVITEM_ID_HOME,
    name:"Home",
    url:"https://newcms.neulion.net.cn:8443/home",
    referTo:"",
    isActive:false
  },
  {
    id:NAVITEM_ID_CONTENT,
    name:"Content",
    url:"https://newcms.neulion.net.cn:8080/content",
    referTo:_APP_CONTENT_NAME,
    isActive:false
  },
  {
    id:NAVITEM_ID_CUSTOMER,
    name:"Customer",
    url:"https://newcms.neulion.net.cn:8443/customer",
    referTo:"",
    isActive:false
  }
]