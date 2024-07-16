import {
  useContext,
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
  Overlay
} from 'shared/ui';

import {
  useImmutableCallback
} from 'shared/lib';

import {
  PopoverContext
} from '../popover/context';

import {
  ANIMATION_TRANSITION,
  ANIMATION_ANIMATE,
  ANIMATION_INITIAL,
  ANIMATION_EXIT
} from './constants';

import {
  getPopoverCoordinates
} from './utils';

import {
  useCorrectPosition
} from './hooks';

import Props   from './component.props';
import classes from './component.module.scss';

const PopoverContent: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    onMouseLeave,
    triggerWidth,
    ...otherProps
  } = props;

  const {
    triggerRef,
    popoverRef,
    triggerRect,
    popoverRect,
    popoverId,
    position,
    isOpened,
    close,
    disableHover,
    disableInteractive
  } = useContext(PopoverContext);

  const correctPosition = useCorrectPosition({
    triggerRect,
    popoverRect,
    position
  });

  function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>): void {
    onMouseLeave?.(event);
    if (!triggerRef.current) return;
    if (!(event.relatedTarget instanceof HTMLElement)) return;
    if (event.relatedTarget === triggerRef.current) return;
    if (triggerRef.current.contains(event.relatedTarget)) return;
    close();
  }

  const callbackRef = useImmutableCallback((instance: HTMLDivElement | null) => {
    popoverRef.current = instance;
    if (ref) {
      if (typeof ref === 'function') {
        return ref(instance);
      }
      if (typeof ref === 'object') {
        return ref.current = instance;
      }
    }
  });

  const coordinates = getPopoverCoordinates(triggerRect, correctPosition);

  const classNames = clsx(className, {
    [classes['popover-content']]:                              true,
    [classes[`popover-content--position-${correctPosition}`]]: correctPosition,
    [classes['popover-content--non-interactive']]:             disableInteractive
  });

  const style: React.CSSProperties = {
    maxWidth: triggerWidth ? triggerRef.current?.offsetWidth : 'auto',
    minWidth: triggerWidth ? triggerRef.current?.offsetWidth : 'auto',
    left:     `${coordinates.x}px`,
    top:      `${coordinates.y}px`
  };

  return (
    <Overlay>
      <AnimatePresence initial={false}>
        {isOpened && (
          <motion.div
            ref={callbackRef}
            id={popoverId}
            className={classNames}
            style={style}
            onMouseLeave={disableHover ? undefined : handleMouseLeave}
            transition={ANIMATION_TRANSITION}
            initial={ANIMATION_INITIAL}
            animate={ANIMATION_ANIMATE}
            exit={ANIMATION_EXIT}
            {...otherProps}
          >
            <div className={classes['popover-content-inner']}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Overlay>
  );

};

export default forwardRef(PopoverContent);