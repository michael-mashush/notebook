import {
  memo,
  type FunctionComponent
} from 'react';

import {
  BurgerButton
} from 'features/technical/toggle-menu';

import {
  Header,
  HeaderContent,
  Logotype
} from 'shared/ui';

const MainHeader: FunctionComponent = () => {

  return (
    <Header>
      <HeaderContent>
        <BurgerButton />
        <Logotype />
      </HeaderContent>
    </Header>
  );

};

export default memo(MainHeader);