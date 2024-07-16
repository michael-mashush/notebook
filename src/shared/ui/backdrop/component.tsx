import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import {
  clsx
} from 'clsx';

import {
  ANIMATION_TRANSITION,
  ANIMATION_INITIAL,
  ANIMATION_ANIMATE,
  ANIMATION_EXIT
} from './constants';

import Props   from './component.props';
import classes from './component.module.scss';

const Backdrop: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    className,
    opened,
    blurred,
    invisible,
    role = 'region',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['backdrop']]:            true,
    [classes['backdrop--blurred']]:   blurred,
    [classes['backdrop--invisible']]: invisible
  });

  return (
    <AnimatePresence initial={false}>
      {opened && (
        <motion.div
          ref={ref}
          role={role}
          className={classNames}
          transition={ANIMATION_TRANSITION}
          initial={ANIMATION_INITIAL}
          animate={ANIMATION_ANIMATE}
          exit={ANIMATION_EXIT}
          {...otherProps}
        />
      )}
    </AnimatePresence>
  );

};

export default memo(forwardRef(Backdrop));