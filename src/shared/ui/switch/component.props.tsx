import {
  type ComponentPropsWithoutRef
} from 'react';

type AllowedInputAttributes = Omit<ComponentPropsWithoutRef<'input'>,
  | 'accept'
  | 'alt'
  | 'children'
  | 'dirname'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'list'
  | 'max'
  | 'maxLength'
  | 'min'
  | 'minLength'
  | 'placeholder'
  | 'src'
  | 'step'
  | 'type'
  | 'value'
  | 'width'
>;

interface Props extends AllowedInputAttributes {}

export default Props;