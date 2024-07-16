import type {
  AnimationProps
} from 'framer-motion';

import {
  TRANSITION_DURATION_150,
  TRANSITION_TIMING_FUNCTION_LINEAR
} from 'shared/lib';

export const ANIMATION_TRANSITION: AnimationProps['transition'] = {
  duration: TRANSITION_DURATION_150,
  ease:     TRANSITION_TIMING_FUNCTION_LINEAR
};

export const ANIMATION_INITIAL: AnimationProps['initial'] = {
  opacity: 0,
  y:       -10
};

export const ANIMATION_ANIMATE: AnimationProps['animate'] = {
  opacity: 1,
  y:       0
};

export const ANIMATION_EXIT: AnimationProps['exit'] = {
  opacity: 0,
  y:       10
};