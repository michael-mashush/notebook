import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  Overlay,
  Paragraph,
  Spinner
} from '..';

import Props   from './component.props';
import classes from './component.module.scss';

const Loader: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    className,
    description,
    position = 'fixed',
    visible  = false,
    role     = 'alert',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['loader']]:                       true,
    [classes[`loader--position-${position}`]]: position
  });

  if (visible) {
    if (position === 'fixed') {
      return (
        <Overlay>
          <div ref={ref} className={classNames} role={role} {...otherProps}>
            <div className={classes['loader-content']}>
              <Spinner />
              {description && (
                <Paragraph className={classes['loader-description']}>
                  {description}
                </Paragraph>
              )}
            </div>
          </div>
        </Overlay>
      );
    }
    return (
      <div ref={ref} className={classNames} {...otherProps}>
        <div className={classes['loader-content']}>
          <Spinner />
          {description && (
            <Paragraph className={classes['loader-description']}>
              {description}
            </Paragraph>
          )}
        </div>
      </div>
    );
  }

};

export default memo(forwardRef(Loader));