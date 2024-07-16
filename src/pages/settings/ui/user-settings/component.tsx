import {
  memo,
  type FunctionComponent
} from 'react';

import {
  UpdateUserForm
} from 'features/user/update-user';

import {
  SettingsGroup,
  SettingsGroupContent,
  SettingsGroupHeader,
  SettingsGroupTitle
} from '../settings-group';

const UserSettings: FunctionComponent = () => {

  return (
    <SettingsGroup>
      <SettingsGroupHeader>
        <SettingsGroupTitle>
          User
        </SettingsGroupTitle>
      </SettingsGroupHeader>
      <SettingsGroupContent>
        <UpdateUserForm />
      </SettingsGroupContent>
    </SettingsGroup>
  );

};

export default memo(UserSettings);