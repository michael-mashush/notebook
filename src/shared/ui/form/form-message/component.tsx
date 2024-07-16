import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import {
  Paragraph
} from '../..';

import {
  ANIMATION_TRANSITION,
  ANIMATION_INITIAL,
  ANIMATION_ANIMATE,
  ANIMATION_EXIT
} from './constants';

import Props from './component.props';

const FormMessage: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    visible = false,
    size    = 'xs',
    color   = 'error',
    weight  = 'medium',
    ...otherProps
  } = props;

  return (
    <AnimatePresence initial={true}>
      {
        visible && (
          <motion.div
            ref={ref}
            role="alert"
            transition={ANIMATION_TRANSITION}
            initial={ANIMATION_INITIAL}
            animate={ANIMATION_ANIMATE}
            exit={ANIMATION_EXIT}
          >
            <Paragraph
              children={children}
              color={color}
              size={size}
              weight={weight}
              {...otherProps}
            />
          </motion.div>
        )
      }
    </AnimatePresence>
  );

};

export default forwardRef(FormMessage);