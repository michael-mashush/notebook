import {
  memo,
  type FunctionComponent
} from 'react';

import {
  LayoutGridIcon,
  SearchIcon
} from 'lucide-react';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  NavbarGroup,
  NavbarGroupContent,
  NavbarGroupTitle,
  NavbarItem,
  NavbarLink,
  NavbarList
} from 'shared/ui';

const NavbarMainGroup: FunctionComponent = () => {

  return (
    <NavbarGroup>
      <NavbarGroupTitle>
        Basic
      </NavbarGroupTitle>
      <NavbarGroupContent>
        <NavbarList>
          <NavbarItem>
            <NavbarLink href={ROUTER_CONFIG.HOME_PAGE.PATH} startIcon={LayoutGridIcon}>
              Home
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href={ROUTER_CONFIG.SEARCH_PAGE.PATH} startIcon={SearchIcon}>
              Search
            </NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarGroupContent>
    </NavbarGroup>
  );

};

export default memo(NavbarMainGroup);