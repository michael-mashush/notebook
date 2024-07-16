import {
  memo,
  type FunctionComponent
} from 'react';

import {
  Navbar,
  SheetContent
} from 'shared/ui';

import {
  NavbarMainGroup
} from '../navbar-main-group';

import {
  NavbarNotesGroup
} from '../navbar-notes-group';

import {
  NavbarHelpGroup
} from '../navbar-help-group';

const SidebarContent: FunctionComponent = () => {

  return (
    <SheetContent>
      <Navbar>
        <NavbarMainGroup />
        <NavbarNotesGroup />
        <NavbarHelpGroup />
      </Navbar>
    </SheetContent>
  );

};

export default memo(SidebarContent);