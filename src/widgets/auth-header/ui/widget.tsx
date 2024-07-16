import {
  memo,
  type FunctionComponent
} from 'react';

import {
  Header,
  HeaderContent,
  Logotype
} from 'shared/ui';

const AuthHeader: FunctionComponent = () => {

  return (
    <Header>
      <HeaderContent>
        <Logotype />
      </HeaderContent>
    </Header>
  );

};

export default memo(AuthHeader);