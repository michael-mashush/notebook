import {
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
  useDocumentEvent
}  from 'shared/lib';

import {
  Backdrop,
  Overlay
} from '../..';

import {
  ANIMATION_TRANSITION,
  ANIMATION_INITIAL,
  ANIMATION_ANIMATE,
  ANIMATION_EXIT
} from './constants';

import Props   from './component.props';
import classes from './component.module.scss';

const Dialog: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    className,
    children,
    opened,
    onClose,
    role = 'dialog',
    ...otherProps
  } = props;

  useDocumentEvent('keydown', (event) => {
    if (event.code === 'Escape') {
      return onClose?.();
    }
  }, { disabled: !opened });

  return (
    <Overlay>
      <Backdrop
        opened={opened}
        blurred
        onClick={onClose}
      />
      <AnimatePresence initial={false}>
        {
          opened && (
            <div className={classes['dialog-wrapper']}>
              <motion.section
                ref={ref}
                className={clsx(className, classes['dialog'])}
                transition={ANIMATION_TRANSITION}
                initial={ANIMATION_INITIAL}
                animate={ANIMATION_ANIMATE}
                exit={ANIMATION_EXIT}
                role={role}
                {...otherProps}
              >
                {children}
              </motion.section>
            </div>
          )
        }
      </AnimatePresence>
    </Overlay>
  );

};

export default forwardRef(Dialog);