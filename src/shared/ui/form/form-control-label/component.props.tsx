import {
  type ReactNode
} from 'react';

import {
  type LabelProps
} from '../..';

import {
  type FormControlLabelPosition
} from './types';

interface Props extends LabelProps {

  /**
   * The control of the component.
   *
   * @example
   *  <FormControlLabel control={<Checkbox />}>
   *    ...
   *  </FormControlLabel>
   */
  control: ReactNode;

  /**
   * The position of the control label.
   *
   * @default
   *  "right"
   *
   * @example
   *  <FormControlLabel position="left">
   *    ...
   *  </FormControlLabel>
   */
  position?: FormControlLabelPosition;

}

export default Props;