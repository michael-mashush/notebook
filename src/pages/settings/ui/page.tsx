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
  MainLayoutInner,
  MainLayoutIntro,
  MainLayoutTitle
} from 'shared/ui';

import {
  UserSettings
} from './user-settings';

import {
  AppearanceSettings
} from './appearance-settings';

import {
  SearchSettings
} from './search-settings';

import {
  AccountSettings
} from './account-settings';

const SettingsPage: FunctionComponent = () => {

  return (
    <MainLayout>
      <MainLayoutHeader>
        <MainHeader />
      </MainLayoutHeader>
      <MainLayoutContent>
        <MainLayoutIntro>
          <MainLayoutTitle>
            Settings
          </MainLayoutTitle>
        </MainLayoutIntro>
        <MainLayoutInner>
          <UserSettings />
          <AppearanceSettings />
          <SearchSettings />
          <AccountSettings />
        </MainLayoutInner>
      </MainLayoutContent>
      <MainLayoutFooter>
        <MainFooter />
      </MainLayoutFooter>
    </MainLayout>
  );
};

export default SettingsPage;