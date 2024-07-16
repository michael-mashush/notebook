import {
  useState
} from 'react';

import {
  useImmutableCallback,
  useRemountEffect
} from 'shared/lib';

import {
  SelectValue
} from '../types';

export type UseValueOptions = {
  onChange?: (newValue: SelectValue | null) => void;
};

export type UseValueResult = {
  value:  SelectValue | null;
  select: (newValue: SelectValue) => void;
  cancel: (newValue: SelectValue) => void;
  clear:  () => void;
};

export function useValue(externalDefaultValue: SelectValue | null, externalValue: SelectValue | null, options: UseValueOptions): UseValueResult {

  const {
    onChange
  } = options;

  const [ value, setValue ] = useState<SelectValue | null>(externalDefaultValue ?? externalValue);

  const select = useImmutableCallback((newValue: SelectValue) => {
    setValue(newValue);
    onChange?.(newValue);
  });

  const cancel = useImmutableCallback((newValue: SelectValue) => {
    setValue((oldValue) => oldValue === newValue ? null : oldValue);
    onChange?.(null);
  });

  const clear = useImmutableCallback(() => {
    setValue(null);
    onChange?.(null);
  });

  useRemountEffect(() => {
    setValue(externalValue);
  }, [ externalValue ]);

  return {
    value,
    select,
    cancel,
    clear
  };

}