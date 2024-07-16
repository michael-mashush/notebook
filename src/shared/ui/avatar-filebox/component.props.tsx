import {
  type ComponentPropsWithoutRef
} from 'react';

type AllowedInputAttributes = Omit<ComponentPropsWithoutRef<'input'>,
  | 'alt'
  | 'checked'
  | 'children'
  | 'defaultChecked'
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
  | 'multiple'
  | 'pattern'
  | 'placeholder'
  | 'size'
  | 'step'
  | 'type'
  | 'value'
  | 'width'
>;

interface Props extends AllowedInputAttributes {

  /**
   * File preview.
   *
   * @example
   *  <AvatarFilebox preview={file} />
   */
  preview?: string | ArrayBuffer;

}

export default Props;