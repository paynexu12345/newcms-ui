import { CustomizeClassNames } from '../interfaces';

export class HeaderNavItem{
  id:number;
  url:string;
  name:string;
  referTo:string;
}
export class HeaderNavItemConfig implements CustomizeClassNames{
  item:HeaderNavItem;
  cssClasses?:string[];
  isActive:boolean;
}
export class HeaderNavConfig implements CustomizeClassNames{
  itemConfigs:HeaderNavItemConfig[];
  cssClasses?:string[];
}

export const DEFAULT_HEADER_NAV_CONFIG = {
  itemConfigs:[],
  cssClasses:[]
}