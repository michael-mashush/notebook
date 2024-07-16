import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Link as RouterLink
} from 'react-router-dom';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Link: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (props, ref) => {

  const {
    className,
    children,
    href,
    underline = 'never',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['link']]:                         true,
    [classes[`link--underline-${underline}`]]: underline
  });

  return (
    <RouterLink ref={ref} className={classNames} to={href} {...otherProps}>
      {children}
    </RouterLink>
  );

};

export default memo(forwardRef(Link));