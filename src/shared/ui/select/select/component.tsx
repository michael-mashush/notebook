import {
  cloneElement,
  useRef,
  useImperativeHandle,
  forwardRef,
  type ForwardRefRenderFunction,
  type KeyboardEvent
} from 'react';

import {
  ChevronsUpDown
} from 'lucide-react';

import clsx from 'clsx';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textbox,
  List,
  ListItem
} from '../..';

import {
  useImmutableCallback,
  useLockedBody,
  useRemountEffect
} from 'shared/lib';

import {
  useIsOpened,
  useValue
} from './hooks';

import {
  type SelectRef
} from './types';

import Props   from './component.props';
import classes from './component.module.scss';

const Select: ForwardRefRenderFunction<SelectRef, Props> = (props, ref) => {

  const {
    children,
    className,
    defaultValue: externalDefaultValue = null,
    value: externalValue = null,
    opened: externalOpened = false,
    invalid = false,
    disabled = false,
    cancelable = false,
    autoClose = false,
    onChange,
    onClose,
    onOpen,
    role = 'combobox',
    ...otherProps
  } = props;

  const textareaRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    isOpened,
    open,
    close,
    toggle
  } = useIsOpened(externalOpened, { onOpen, onClose });

  const {
    value,
    select,
    cancel,
    clear
  } = useValue(externalDefaultValue, externalValue, { onChange });

  useRemountEffect(() => {
    if (value && autoClose) {
      close();
      textareaRef.current?.focus();
    }
  }, [ value, close ]);

  useLockedBody(isOpened);

  useImperativeHandle(ref, () => {
    return textareaRef.current! && {
      value,
      isOpened,
      open,
      close,
      toggle,
      clear
    };
  }, [ textareaRef, value, isOpened, open, close, toggle, clear ]);

  const handleTextboxKeyDown = useImmutableCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      toggle();
    }
  });

  function handleOptionKeyDown(event: KeyboardEvent<HTMLButtonElement>): void {
    if (event.code === 'Shift' || event.code === 'Tab') {
      event.preventDefault();
    }
    if (event.code === 'Escape') {
      close();
      textareaRef.current?.focus();
    }
    if (event.code === 'ArrowUp') {
      event.preventDefault();
      const currOptionParent = event.currentTarget.parentElement;
      const prevOptionParent = currOptionParent?.previousElementSibling;
      const prevOptionButton = prevOptionParent?.querySelector('button');
      prevOptionButton?.focus();
    }
    if (event.code === 'ArrowDown') {
      event.preventDefault();
      const currOptionParent = event.currentTarget.parentElement;
      const nextOptionParent = currOptionParent?.nextElementSibling;
      const nextOptionButton = nextOptionParent?.querySelector('button');
      nextOptionButton?.focus();
    }
  }

  const selectedOption = children.find((child) => {
    return child.props.value === value;
  });

  const classNames = clsx({
    [classes['select']]:         true,
    [classes['select--opened']]: isOpened
  });

  return (
    <div className={classNames}>
      <Popover
        opened={isOpened}
        onOpen={open}
        onClose={close}
        disableFocus
        disableHover
      >
        <PopoverTrigger>
          <Textbox
            ref={textareaRef}
            className={clsx(className, classes['textarea'])}
            invalid={invalid}
            disabled={disabled}
            readOnly
            endIcon={ChevronsUpDown}
            value={selectedOption?.props.label ?? ''}
            onKeyDown={handleTextboxKeyDown}
            role={role}
            data-opened={isOpened}
            data-disabled={disabled}
            data-cancelable={cancelable}
            data-autoclose={autoClose}
            {...otherProps}
          />
        </PopoverTrigger>
        <PopoverContent ref={dropdownRef} className={classes['dropdown']} triggerWidth>
          <List role="listbox">
            {
              children.map((child, index) => {

                const handleSelect = select.bind(null, child.props.value);
                const handleCancel = cancel.bind(null, child.props.value);
                const selected     = child.props.value === value;
                const autoFocus    = value ? selected : !index;

                const onClick = selected
                  ? cancelable
                    ? handleCancel
                    : undefined
                  : handleSelect;

                const onKeyDown = handleOptionKeyDown;

                return (
                  <ListItem key={child.props.value}>
                    {cloneElement(child, {
                      ...child.props,
                      autoFocus,
                      selected,
                      onClick,
                      onKeyDown
                    })}
                  </ListItem>
                );

              })
            }
          </List>
        </PopoverContent>
      </Popover>
    </div>
  );

};

export default forwardRef(Select);