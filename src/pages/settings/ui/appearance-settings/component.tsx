import {
  memo,
  type FunctionComponent
} from 'react';

import {
  ChangeColorSchemeSelect
} from 'features/technical/change-color-scheme';

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

const AppearanceSettings: FunctionComponent = () => {

  return (
    <SettingsGroup>
      <SettingsGroupHeader>
        <SettingsGroupTitle>
          Appearance
        </SettingsGroupTitle>
      </SettingsGroupHeader>
      <SettingsGroupContent>
        <SettingsField>
          <SettingsFieldContent>
            <SettingsFieldTitle>
              Color scheme
            </SettingsFieldTitle>
            <SettingsFieldDescription>
              What color scheme will be used in the application.
            </SettingsFieldDescription>
          </SettingsFieldContent>
          <SettingsFieldControl>
            <ChangeColorSchemeSelect />
          </SettingsFieldControl>
        </SettingsField>
      </SettingsGroupContent>
    </SettingsGroup>
  );

};

export default memo(AppearanceSettings);