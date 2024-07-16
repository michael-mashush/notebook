import {
  memo,
  type FunctionComponent
} from 'react';

import {
  useAutoCloseMenu,
  useMenuStore
} from 'features/technical/toggle-menu';

import {
  Sheet
} from 'shared/ui';

import {
  SidebarHeader
} from './sidebar-header';

import {
  SidebarContent
} from './sidebar-content';

import {
  SidebarFooter
} from './sidebar-footer';

const MainSidebar: FunctionComponent = () => {

  const isOpened = useMenuStore((store) => store.isOpened);
  const close    = useMenuStore((store) => store.close);

  useAutoCloseMenu();

  return (
    <Sheet opened={isOpened} onClose={close}>
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </Sheet>
  );

};

export default memo(MainSidebar);