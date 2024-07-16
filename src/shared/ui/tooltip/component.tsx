import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  Paragraph,
  Popover,
  PopoverTrigger,
  PopoverContent
} from 'shared/ui';

import {
  useMediaQuery
} from 'shared/lib';

/*
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value:    vitest.fn().mockImplementation((query) => ({
        matches:             false,
        media:               query,
        onchange:            null,
        addListener:         vitest.fn(),
        removeListener:      vitest.fn(),
        addEventListener:    vitest.fn(),
        removeEventListener: vitest.fn(),
        dispatchEvent:       vitest.fn()
      }))
    });
  });
*/

import Props   from './component.props';
import classes from './component.module.scss';

const Tooltip: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    opened = false,
    title,
    position,
    role = 'tooltip',
    ...otherProps
  } = props;

  const withoutHover = useMediaQuery('(hover: none)');

  return (
    <Popover
      opened={opened}
      position={position}
      disableInteractive
      disableClick
      disableFocus={withoutHover}
      disableHover={withoutHover}
    >
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent ref={ref} className={clsx(className, classes['tooltip'])} role={role} {...otherProps}>
        <Paragraph size="xs">
          {title}
        </Paragraph>
      </PopoverContent>
    </Popover>
  );

};

export default forwardRef(Tooltip);