import {
  SelectValue
} from './select-value';

export type SelectRef = Omit<React.ComponentPropsWithoutRef<'input'>, 'value'> & {
  value:    SelectValue | null;
  isOpened: boolean;
  open:     () => void;
  close:    () => void;
  toggle:   () => void;
  clear:    () => void;
};