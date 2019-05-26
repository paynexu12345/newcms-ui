export interface HeaderNavItem{
  id:number;
  url:string;
  name:string;
  referTo:string;
  isActive:boolean;
}
export interface HeaderNavConfig {
  items:HeaderNavItem[]
}