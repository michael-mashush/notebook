import {
  forwardRef,
  type ForwardRefRenderFunction,
  type CSSProperties
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Paragraph: ForwardRefRenderFunction<HTMLParagraphElement, Props> = (props, ref) => {

  const {
    children,
    className,
    style,
    color      = 'default',
    casing     = 'none',
    size       = 'sm',
    weight     = 'regular',
    leading    = 'normal',
    align      = 'start',
    nowrap     = false,
    ellipsis   = false,
    monospaced = false,
    maxLines,
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['paragraph']]:                     true,
    [classes[`paragraph--color-${color}`]]:     color,
    [classes[`paragraph--casing-${casing}`]]:   casing,
    [classes[`paragraph--size-${size}`]]:       size,
    [classes[`paragraph--weight-${weight}`]]:   weight,
    [classes[`paragraph--leading-${leading}`]]: leading,
    [classes[`paragraph--align-${align}`]]:     align,
    [classes['paragraph--max-lines']]:          maxLines,
    [classes['paragraph--ellipsis']]:           ellipsis,
    [classes['paragraph--monospaced']]:         monospaced,
    [classes['paragraph--nowrap']]:             nowrap
  });

  const styles: CSSProperties = {
    ...style,
    WebkitLineClamp: maxLines
  };

  return (
    <p ref={ref} className={classNames} style={styles} {...otherProps}>
      {children}
    </p>
  );

};

export default forwardRef(Paragraph);