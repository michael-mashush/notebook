import {
  type FunctionComponent
} from 'react';

import {
  MainHeader
} from 'widgets/main-header';

import {
  MainFooter
} from 'widgets/main-footer';

import {
  MainLayout,
  MainLayoutContent,
  MainLayoutHeader,
  MainLayoutFooter,
  MainLayoutInner
} from 'shared/ui';

import {
  LetsStart
} from './lets-start';

const HomePage: FunctionComponent = () => {

  return (
    <MainLayout>
      <MainLayoutHeader>
        <MainHeader />
      </MainLayoutHeader>
      <MainLayoutContent>
        <MainLayoutInner>
          <LetsStart />
        </MainLayoutInner>
      </MainLayoutContent>
      <MainLayoutFooter>
        <MainFooter />
      </MainLayoutFooter>
    </MainLayout>
  );

};

export default HomePage;