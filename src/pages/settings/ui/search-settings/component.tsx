import {
  memo,
  type FunctionComponent
} from 'react';

import {
  ChangeSearchFormatSelect,
  ChangeSearchLimitSelect
} from 'features/technical/change-search-options';

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

const SearchSettings: FunctionComponent = () => {

  return (
    <SettingsGroup>
      <SettingsGroupHeader>
        <SettingsGroupTitle>
          Search
        </SettingsGroupTitle>
      </SettingsGroupHeader>
      <SettingsGroupContent>
        <SettingsField>
          <SettingsFieldContent>
            <SettingsFieldTitle>
              Limit
            </SettingsFieldTitle>
            <SettingsFieldDescription>
              How many entries will be displayed on the search page.
            </SettingsFieldDescription>
          </SettingsFieldContent>
          <SettingsFieldControl>
            <ChangeSearchLimitSelect />
          </SettingsFieldControl>
        </SettingsField>
        <SettingsField>
          <SettingsFieldContent>
            <SettingsFieldTitle>
              Format
            </SettingsFieldTitle>
            <SettingsFieldDescription>
              How will the data be displayed on the search page.
            </SettingsFieldDescription>
          </SettingsFieldContent>
          <SettingsFieldControl>
            <ChangeSearchFormatSelect />
          </SettingsFieldControl>
        </SettingsField>
      </SettingsGroupContent>
    </SettingsGroup>
  );

};

export default memo(SearchSettings);