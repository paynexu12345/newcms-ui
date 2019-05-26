import { HeaderNavItem } from "projects/cms-common/src/lib/components/header-nav";
import { deepCopy } from "projects/cms-common/src/lib/utils";
import { HEADER_NAVS } from "src/app-config";

export function generateActiveNavItem(activeItemId) {
  let navItems: HeaderNavItem[] = deepCopy(HEADER_NAVS);
  navItems.map(navItem => {
    if (navItem.id == activeItemId) navItem.isActive = true;
    else navItem.isActive = false;
  });
  return navItems;
}
