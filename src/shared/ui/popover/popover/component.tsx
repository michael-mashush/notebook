import {
  useId,
  useRef,
  type FunctionComponent
} from 'react';

import {
  useDocumentEvent
} from 'shared/lib';

import {
  PopoverContext,
  type PopoverContextValue
} from './context';

import {
  useIsOpened,
  usePopoverRect,
  useTriggerRect
} from './hooks';

import Props from './component.props';

const Popover: FunctionComponent<Props> = (props) => {

  const {
    children,
    position = 'bottom-center',
    opened = false,
    disableClick = false,
    disableHover = false,
    disableFocus = false,
    disableInteractive = false,
    onOpen,
    onClose
  } = props;

  const {
    isOpened,
    open,
    close,
    toggle
  } = useIsOpened(opened, { onOpen, onClose });

  const triggerRef = useRef<HTMLElement | null>(null);
  const popoverRef = useRef<HTMLElement | null>(null);

  const triggerRect = useTriggerRect(triggerRef, isOpened);
  const popoverRect = usePopoverRect(popoverRef, isOpened);

  const triggerId = useId();
  const popoverId = useId();

  function handleDocumentClick(event: MouseEvent): void {
    if (!triggerRef.current) return;
    if (!popoverRef.current) return;
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target === triggerRef.current || triggerRef.current.contains(event.target)) return;
    if (event.target === popoverRef.current || popoverRef.current.contains(event.target)) return;
    close();
  }

  function handleDocumentMouseMove(event: MouseEvent): void {
    if (!triggerRef.current) return;
    if (!popoverRef.current) return;
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target === triggerRef.current || triggerRef.current.contains(event.target)) return;
    if (event.target === popoverRef.current || popoverRef.current.contains(event.target)) return;
    close();
  }

  useDocumentEvent('click',     handleDocumentClick,     { disabled: !isOpened });
  useDocumentEvent('mousemove', handleDocumentMouseMove, { disabled: !isOpened || disableHover });

  const contextValue: PopoverContextValue = {
    triggerRef,
    popoverRef,
    triggerRect,
    popoverRect,
    triggerId,
    popoverId,
    position,
    isOpened,
    open,
    close,
    toggle,
    disableClick,
    disableFocus,
    disableHover,
    disableInteractive
  };

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );

};

export default Popover;