import {
  HeaderNavItem,
  HeaderNavItemConfig
} from "projects/cms-common/src/lib/components/header-nav";
import { deepCopy } from "projects/cms-common/src/lib/utils";
import { HEADER_NAVS } from "src/app-config";

export function generateNavItemConfigs(activeItemId): HeaderNavItemConfig[] {
  let navItems: HeaderNavItem[] = deepCopy(HEADER_NAVS);
  let navItemConfigs: HeaderNavItemConfig[] = [];
  navItems.map(navItem => {
    let itemCfg: HeaderNavItemConfig = {
      item: navItem,
      isActive: false
    };
    if (navItem.id == activeItemId) itemCfg.isActive = true;
    else itemCfg.isActive = false;
    navItemConfigs.push(itemCfg);
  });

  return navItemConfigs;
}
