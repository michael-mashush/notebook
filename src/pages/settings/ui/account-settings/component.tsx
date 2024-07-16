import {
  memo,
  type FunctionComponent
} from 'react';

import {
  KeyRoundIcon
} from 'lucide-react';

import {
  SignOutButton
} from 'features/auth';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  ButtonLink
} from 'shared/ui';

import {
  SettingsGroup,
  SettingsGroupContent,
  SettingsGroupHeader,
  SettingsGroupTitle
} from '../settings-group';

import {
  SettingsField,
  SettingsFieldContent,
  SettingsFieldControl,
  SettingsFieldDescription,
  SettingsFieldTitle
} from '../settings-field';

const AccountSettings: FunctionComponent = () => {

  return (
    <SettingsGroup>
      <SettingsGroupHeader>
        <SettingsGroupTitle>
          Account
        </SettingsGroupTitle>
      </SettingsGroupHeader>
      <SettingsGroupContent>
        <SettingsField>
          <SettingsFieldContent>
            <SettingsFieldTitle>
              Password
            </SettingsFieldTitle>
            <SettingsFieldDescription>
              Update your current password.
            </SettingsFieldDescription>
          </SettingsFieldContent>
          <SettingsFieldControl>
            <ButtonLink href={ROUTER_CONFIG.UPDATE_PASSWORD_PAGE.PATH} startIcon={KeyRoundIcon} variant="outlined">
              Update password
            </ButtonLink>
          </SettingsFieldControl>
        </SettingsField>
        <SettingsField>
          <SettingsFieldContent>
            <SettingsFieldTitle>
              Logout
            </SettingsFieldTitle>
            <SettingsFieldDescription>
              Log out of your account.
            </SettingsFieldDescription>
          </SettingsFieldContent>
          <SettingsFieldControl>
            <SignOutButton />
          </SettingsFieldControl>
        </SettingsField>
      </SettingsGroupContent>
    </SettingsGroup>
  );

};

export default memo(AccountSettings);