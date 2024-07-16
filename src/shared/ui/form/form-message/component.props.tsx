import {
  type ParagraphProps
} from '../..';

interface Props extends ParagraphProps {

  /**
   * If true, then the form-message will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <FormMessage visible />
   */
  visible?: boolean;

}

export default Props;