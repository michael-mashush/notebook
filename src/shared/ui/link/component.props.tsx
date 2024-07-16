import {
  type LinkProps
} from 'react-router-dom';

import {
  type LinkUnderline
} from './types';

interface Props extends Omit<LinkProps, 'to'> {

  /**
   * Creates a hyperlink to web pages, files, email addresses,
   * phone numbers, locations on the same page, and anything
   * else that a URL can refer to.
   *
   * @example
   *  <Link href="/">
   *    ...
   *  </Link>
   */
  href: string;

  /**
   * If true, the link will be underlined.
   *
   * @default
   *  "never"
   *
   * @example
   *  <Link underline="always">
   *    ...
   *  </Link>
   */
  underline?: LinkUnderline;

}

export default Props;