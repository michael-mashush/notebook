import {
  forwardRef,
  type ForwardRefRenderFunction,
  type CSSProperties,
  type ElementType
} from 'react';

import {
  clsx
} from 'clsx';

import {
  getFontSizeByLevel
} from './utils';

import Props   from './component.props';
import classes from './component.module.scss';

const Heading: ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {

  const {
    children,
    className,
    style,
    level      = '1',
    color      = 'default',
    casing     = 'none',
    size       = getFontSizeByLevel(level),
    weight     = 'bold',
    leading    = 'normal',
    align      = 'start',
    nowrap     = false,
    ellipsis   = false,
    monospaced = false,
    maxLines,
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['heading']]:                     true,
    [classes[`heading--color-${color}`]]:     color,
    [classes[`heading--casing-${casing}`]]:   casing,
    [classes[`heading--size-${size}`]]:       size,
    [classes[`heading--weight-${weight}`]]:   weight,
    [classes[`heading--leading-${leading}`]]: leading,
    [classes[`heading--align-${align}`]]:     align,
    [classes['heading--max-lines']]:          maxLines,
    [classes['heading--ellipsis']]:           ellipsis,
    [classes['heading--monospaced']]:         monospaced,
    [classes['heading--nowrap']]:             nowrap
  });

  const styles: CSSProperties = {
    ...style,
    WebkitLineClamp: maxLines
  };

  const HeadingElement = `h${level}` as ElementType;

  return (
    <HeadingElement
      ref={ref}
      children={children}
      className={classNames}
      style={styles}
      {...otherProps}
    />
  );

};

export default forwardRef(Heading);