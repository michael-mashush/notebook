import {
  memo,
  type FunctionComponent
} from 'react';

import {
  Paragraph,
  SheetFooter
} from 'shared/ui';

const SidebarFooter: FunctionComponent = () => {

  return (
    <SheetFooter>
      <Paragraph color="muted">
        © 2024 Notebook
      </Paragraph>
    </SheetFooter>
  );

};

export default memo(SidebarFooter);