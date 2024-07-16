import {
  type NavLinkProps
} from 'react-router-dom';

import {
  type ButtonProps
} from 'shared/ui';

type AllowedButtonProps = Pick<ButtonProps,
| 'children'
| 'startIcon'
>;

interface Props extends Omit<NavLinkProps, 'children' | 'to'>, AllowedButtonProps {

  /**
   * Creates a hyperlink to web pages, files, email addresses,
   * phone numbers, locations on the same page, and anything
   * else that a URL can refer to.
   *
   * @example
   *  <NavbarLink href="/">
   *    ...
   *  </NavbarLink>
   */
  href: string;

}

export default Props;