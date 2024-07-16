import {
  type FunctionComponent
} from 'react';

import {
  LayoutGridIcon
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
  type SearchFormat
} from '../../model';

type Option = {
  value: SearchFormat;
  label: string;
};

const options: Option[] = [
  { value: 'grid', label: 'Grid' },
  { value: 'rows', label: 'Rows' }
];

const ChangeSearchFormatSelect: FunctionComponent = () => {

  const searchFormat    = useSearchOptionsStore((store) => store.searchFormat);
  const setSearchFormat = useSearchOptionsStore((store) => store.setSearchFormat);

  const handleChange = useImmutableCallback((selectedSearchFormat: SelectValue | null) => {
    if (selectedSearchFormat) {
      setSearchFormat(selectedSearchFormat as SearchFormat);
    }
  });

  return (
    <Select value={searchFormat} startIcon={LayoutGridIcon} autoClose placeholder="Select search format" onChange={handleChange}>
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

export default ChangeSearchFormatSelect;