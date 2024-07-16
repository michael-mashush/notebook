import {
  memo,
  type FunctionComponent
} from 'react';

import {
  BurgerButton
} from 'features/technical/toggle-menu';

import {
  Logotype,
  SheetHeader
} from 'shared/ui';

const SidebarHeader: FunctionComponent = () => {

  return (
    <SheetHeader>
      <Logotype />
      <BurgerButton />
    </SheetHeader>
  );

};

export default memo(SidebarHeader);