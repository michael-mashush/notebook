import {
  type LinkProps
} from 'react-router-dom';

import {
  type ButtonProps
} from '..';

type AllowedAnchorProps = Omit<LinkProps,
  | 'autoFocus'
  | 'children'
  | 'to'
>;

type AllowedButtonProps = Pick<ButtonProps,
  | 'children'
  | 'startIcon'
  | 'endIcon'
  | 'variant'
  | 'justify'
  | 'size'
  | 'onlyIcon'
  | 'fullWidth'
>;

interface Props extends AllowedAnchorProps, AllowedButtonProps {

  /**
   * Creates a hyperlink to web pages, files, email
   * addresses, phone numbers, locations on the same page,
   * and anything else that a URL can refer to.
   *
   * @example
   *  <ButtonLink href="/">
   *    ...
   *  </ButtonLink>
   */
  href: string;

}

export default Props;