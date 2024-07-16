import {
  type ReactElement
} from 'react';

import {
  SelectOption,
  type SelectOptionProps
} from '../select-option';

import {
  type SelectValue
} from './types';

import {
  type TextboxProps
} from 'shared/ui/textbox';

type AllowedInputProps = Omit<TextboxProps,
  | 'accept'
  | 'alt'
  | 'capture'
  | 'checked'
  | 'defaultChecked'
  | 'defaultValue'
  | 'dirname'
  | 'endIcon'
  | 'enterKeyHint'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'hidden'
  | 'list'
  | 'max'
  | 'maxLength'
  | 'min'
  | 'minLength'
  | 'multiple'
  | 'pattern'
  | 'onChange'
  | 'onChangeCapture'
  | 'readOnly'
  | 'size'
  | 'src'
  | 'step'
  | 'type'
  | 'value'
  | 'variant'
  | 'width'
>;

interface Props extends AllowedInputProps {

  /**
   * The children of the component.
   *
   * @example
   *  <Select>
   *    ...
   *  </Select>
   */
  children: ReactElement<SelectOptionProps, typeof SelectOption>[];

  /**
   * The default value of the select.
   *
   * @example
   *  <Select defaultValue="1">
   *    ...
   *  </Select>
   */
  defaultValue?: SelectValue;

  /**
   * The value of the select.
   *
   * @example
   *  <Select value="1">
   *    ...
   *  </Select>
   */
  value?: SelectValue;

  /**
   * If true, the select will be opened.
   *
   * @default
   *  false
   *
   * @example
   *  <Select opened>
   *    ...
   *  </Select>
   */
  opened?: boolean;

  /**
   * If true, it will be possible to cancel the selected
   * options.
   *
   * @default
   *  false
   *
   * @example
   *  <Select cancelable>
   *    ...
   *  </Select>
   */
  cancelable?: boolean;

  /**
   * If true, the select will be closed after selecting
   * the option.
   *
   * @default
   *  false
   *
   * @example
   *  <Select autoClose>
   *    ...
   *  </Select>
   */
  autoClose?: boolean;

  /**
   * Event that fires when the select value changes.
   *
   * @example
   *  <Select onChange={handleChange}>
   *    ...
   *  </Select>
   */
  onChange?: (value: SelectValue | null) => void;

  /**
   * Event that fires when a select is opened.
   *
   * @example
   *  <Select onOpen={handleOpen}>
   *    ...
   *  </Select>
   */
  onOpen?: () => void;

  /**
   * Event that fires when a select is closed.
   *
   * @example
   *  <Select onClose={handleClose}>
   *    ...
   *  </Select>
   */
  onClose?: () => void;


}

export default Props;