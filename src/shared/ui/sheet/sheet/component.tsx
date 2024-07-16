import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  useDocumentEvent
}  from 'shared/lib';

import {
  Backdrop,
  Overlay
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const Sheet: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    position = 'left',
    opened,
    role = 'dialog',
    onClose,
    ...otherProps
  } = props;

  useDocumentEvent('keydown', (event) => {
    if (event.code === 'Escape') {
      return onClose?.();
    }
  }, { disabled: !opened });

  const classNames = clsx(className, {
    [classes['sheet']]:                        true,
    [classes[`sheet--position-${position!}`]]: position,
    [classes['sheet--opened']]:                opened
  });

  return (
    <Overlay>
      <Backdrop
        blurred
        opened={opened}
        onClick={onClose}
      />
      <aside ref={ref} className={classNames} role={role} {...otherProps}>
        {children}
      </aside>
    </Overlay>
  );

};

export default forwardRef(Sheet);