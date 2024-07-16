import {
  type ComponentPropsWithoutRef,
  type FunctionComponent,
  type SVGProps
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

interface Props extends AllowedInputAttributes {

  /**
   * Icon to display default status. The icon is expected
   * to be a functional component that will return an svg.
   *
   * @see
   *  - https://www.npmjs.com/package/vite-plugin-svgr
   *  - https://www.npmjs.com/package/next-plugin-svgr
   *
   * @example
   *  <Checkbox defaultIcon={CheckIcon} />
   */
  defaultIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * Icon to display checked status. The icon is expected
   * to be a functional component that will return an svg.
   *
   * @see
   *  - https://www.npmjs.com/package/vite-plugin-svgr
   *  - https://www.npmjs.com/package/next-plugin-svgr
   *
   * @example
   *  <Checkbox checkedIcon={CheckIcon} />
   */
  checkedIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;

}

export default Props;