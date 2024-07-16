import {
  memo,
  type FunctionComponent
} from 'react';

import {
  SettingsIcon,
  Trash2Icon
} from 'lucide-react';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  NavbarGroup,
  NavbarGroupTitle,
  NavbarGroupContent,
  NavbarList,
  NavbarItem,
  NavbarLink
} from 'shared/ui';

const NavbarHelpGroup: FunctionComponent = () => {

  return (
    <NavbarGroup>
      <NavbarGroupTitle>
        Additionally
      </NavbarGroupTitle>
      <NavbarGroupContent>
        <NavbarList>
          <NavbarItem>
            <NavbarLink href={ROUTER_CONFIG.SETTINGS_PAGE.PATH} startIcon={SettingsIcon}>
              Settings
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href={ROUTER_CONFIG.TRASH_PAGE.PATH} startIcon={Trash2Icon}>
              Trash
            </NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarGroupContent>
    </NavbarGroup>
  );

};

export default memo(NavbarHelpGroup);