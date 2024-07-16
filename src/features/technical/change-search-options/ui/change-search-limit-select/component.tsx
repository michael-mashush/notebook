import {
  type FunctionComponent
} from 'react';

import {
  SearchIcon
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
  useSearchOptionsStore,
  type SearchLimit
} from '../../model';

type Option = {
  value: SearchLimit;
  label: string;
};

const options: Option[] = [
  { value: 12, label: '12' },
  { value: 24, label: '24' },
  { value: 36, label: '36' },
  { value: 48, label: '48' },
  { value: 60, label: '60' }
];

const ChangeSearchLimitSelect: FunctionComponent = () => {

  const searchLimit    = useSearchOptionsStore((store) => store.searchLimit);
  const setSearchLimit = useSearchOptionsStore((store) => store.setSearchLimit);

  const handleChange = useImmutableCallback((selectedSearchLimit: SelectValue | null) => {
    if (selectedSearchLimit) {
      setSearchLimit(selectedSearchLimit as SearchLimit);
    }
  });

  return (
    <Select value={searchLimit} startIcon={SearchIcon} autoClose placeholder="Select search limit" onChange={handleChange}>
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

export default ChangeSearchLimitSelect;