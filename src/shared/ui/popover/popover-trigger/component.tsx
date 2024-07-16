import {
  cloneElement,
  useContext,
  type FunctionComponent,
  type HTMLAttributes,
  type RefAttributes
} from 'react';

import {
  useElementEvent,
  useImmutableCallback
} from 'shared/lib';

import {
  PopoverContext
} from '../popover/context';

import Props from './component.props';

const PopoverTrigger: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  const {
    disableClick,
    disableFocus,
    disableHover,
    popoverRef,
    triggerRef,
    popoverId,
    isOpened,
    open,
    close,
    toggle
  } = useContext(PopoverContext);

  const handleClick = useImmutableCallback(() => {
    toggle();
  });

  const handleFocus = useImmutableCallback(() => {
    open();
  });

  const handleBlur = useImmutableCallback((event: FocusEvent) => {
    if (!popoverRef.current) return;
    if (!(event.relatedTarget instanceof HTMLElement)) return;
    if (event.relatedTarget === popoverRef.current) return;
    if (popoverRef.current.contains(event.relatedTarget)) return;
    close();
  });

  const handleMouseEnter = useImmutableCallback(() => {
    open();
  });

  const handleMouseLeave = useImmutableCallback((event: MouseEvent) => {
    if (!popoverRef.current) return;
    if (!(event.relatedTarget instanceof HTMLElement)) return;
    if (event.relatedTarget === popoverRef.current) return;
    if (popoverRef.current.contains(event.relatedTarget)) return;
    close();
  });

  useElementEvent(triggerRef.current, 'click',      handleClick,      { disabled: disableClick });
  useElementEvent(triggerRef.current, 'focus',      handleFocus,      { disabled: disableFocus });
  useElementEvent(triggerRef.current, 'blur',       handleBlur,       { disabled: disableFocus });
  useElementEvent(triggerRef.current, 'mouseenter', handleMouseEnter, { disabled: disableHover });
  useElementEvent(triggerRef.current, 'mouseleave', handleMouseLeave, { disabled: disableHover });

  const callbackRef = useImmutableCallback((instance: HTMLElement | null) => {
    triggerRef.current = instance;

    if (children.ref) {
      if (typeof children.ref === 'function') {
        return children.ref(instance);
      }
      if (typeof children.ref === 'object') {
        return children.ref.current = instance;
      }
    }
  });

  return cloneElement<HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>>(
    children,
    {
      ...children.props,
      ref:             callbackRef,
      'aria-controls': popoverId,
      'aria-expanded': isOpened,
      'aria-haspopup': 'listbox'
    }
  );

};

export default PopoverTrigger;