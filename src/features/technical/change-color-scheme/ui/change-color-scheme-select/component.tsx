import {
  type FunctionComponent
} from 'react';

import {
  PaletteIcon
} from 'lucide-react';

import {
  useImmutableCallback
} from 'shared/lib';

import {
  Select,
  SelectOption,
  type SelectValue
} from 'shared/ui';

import {
  useColorSchemeStore,
  type ColorScheme
} from '../../model';

type Option = {
  value: ColorScheme;
  label: string;
};

const options: Option[] = [
  { value: 'system', label: 'System' },
  { value: 'light',  label: 'Light' },
  { value: 'dark',   label: 'Dark' }
];

const ChangeColorSchemeSelect: FunctionComponent = () => {

  const colorScheme    = useColorSchemeStore((store) => store.colorScheme);
  const setColorScheme = useColorSchemeStore((store) => store.setColorScheme);

  const handleChange = useImmutableCallback((selectedColorScheme: SelectValue | null) => {
    if (selectedColorScheme) {
      setColorScheme(selectedColorScheme as ColorScheme);
    }
  });

  return (
    <Select value={colorScheme} autoClose startIcon={PaletteIcon} placeholder="Select color scheme" onChange={handleChange}>
      {options.map((option) => (
        <SelectOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </Select>
  );

};

export default ChangeColorSchemeSelect;