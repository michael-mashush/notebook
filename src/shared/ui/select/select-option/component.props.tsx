import {
  type ToggleProps
} from 'shared/ui';

import {
  type SelectValue
} from '../select/types';

type AllowedToggleProps = Omit<ToggleProps,
  | 'children'
  | 'justify'
  | 'fullWidth'
  | 'defaultVariant'
  | 'selectedVariant'
  | 'value'
  | 'type'
>;

interface Props extends AllowedToggleProps {

  /**
   * The label of the option.
   *
   * @example
   *  <SelectOption label="1" />
   */
  label: string;

  /**
   * The value of the option.
   *
   * @example
   *  <SelectOption value="1" />
   */
  value: SelectValue | number;

}

export default Props;