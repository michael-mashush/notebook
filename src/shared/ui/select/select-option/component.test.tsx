/*
  eslint-disable
    max-lines,
    max-lines-per-function
*/

import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';

import {
  userEvent
} from '@testing-library/user-event';

import {
  InfoIcon,
  StarIcon
} from 'lucide-react';

import {
  SelectOption,
  SelectOptionProps,
  ButtonClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const SELECT_OPTION_TEST_ID = v4();

describe('shared/ui/select/select-option', () => {

  const OPTION_LABEL = v4();
  const OPTION_VALUE = v4();

  describe('properties', () => {

    describe('the component should render with the correct "autoFocus"', () => {

      it('renders correctly without "authFocus"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toHaveFocus();
      });

      it('renders correctly with "autoFocus" equal to "false"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            autoFocus={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toHaveFocus();
      });

      it('renders correctly with "autoFocus" equal to "true"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            autoFocus={true}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveFocus();
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            className={className1}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            className={`${className1} ${className2}`}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button'], className1, className2);
      });

    });

    describe('the component should render with the correct "disabled"', () => {

      it('renders correctly without "disabled"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toBeDisabled();
      });

      it('renders correctly with "disabled" equal to "false"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            disabled={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toBeDisabled();
      });

      it('renders correctly with "disabled" equal to "true"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            disabled={true}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeDisabled();
      });

    });

    describe('the component should render with the correct "endIcon"', () => {

      it('renders correctly without "endIcon"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID).querySelector('svg')).not.toBeInTheDocument();
      });

      it('renders correctly with "endIcon"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            endIcon={StarIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID).querySelector('svg')).toHaveClass('lucide-star');
      });

    });

    describe('the component should render with the correct "label"', () => {

      it('renders correctly with "label"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveTextContent(OPTION_LABEL);
      });

    });

    describe('the component should render with the correct "name"', () => {

      it('renders correctly without "name"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toHaveAttribute('name');
      });

      it('renders correctly with "name"', () => {
        const name = 'select-option text';
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            name={name}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveAttribute('name', name);
      });

    });

    describe('the component should render with the correct "onlyIcon"', () => {

      it('renders correctly with default "onlyIcon"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toHaveClass(ButtonClasses['button--only-icon']);
      });

      it('renders correctly with "onlyIcon" equal to "false"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onlyIcon={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).not.toHaveClass(ButtonClasses['button--only-icon']);

      });

      it('renders correctly with "onlyIcon" equal to "true"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onlyIcon={true}
          />,
          RENDER_OPTIONS
        );
        screen.debug();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button--only-icon']);
      });

    });

    describe('the component should render with the correct "size"', () => {

      it('renders correctly with default "size"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button--size-medium']);
      });

      it('renders correctly with "size" equal to "small"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            size="small"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button--size-small']);
      });

      it('renders correctly with "size" equal to "medium"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            size="medium"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button--size-medium']);
      });

      it('renders correctly with "size" equal to "large"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            size="large"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveClass(ButtonClasses['button--size-large']);
      });

    });

    describe('the component should render with the correct "startIcon"', () => {

      it('renders correctly without "startIcon"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID).querySelector('svg')).not.toBeInTheDocument();
      });

      it('renders correctly with "startIcon"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            startIcon={InfoIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID).querySelector('svg')).toHaveClass('lucide-info');
      });

    });

    describe('the component should render with the correct "value"', () => {

      it('renders correctly with "value"', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveAttribute('data-value', OPTION_VALUE);
      });

    });

  });

  describe('event handling', () => {

    describe('form events', () => {

      it('the component should handle "blur" event', () => {
        const handleBlurDefault = vitest.fn();
        const handleBlurCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onBlur={handleBlurDefault}
            onBlurCapture={handleBlurCapture}
            autoFocus
          />,
          RENDER_OPTIONS
        );
        expect(handleBlurDefault).not.toHaveBeenCalled();
        expect(handleBlurCapture).not.toHaveBeenCalled();
        fireEvent.blur(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleBlurDefault).toHaveBeenCalled();
        expect(handleBlurCapture).toHaveBeenCalled();
      });

      it('the component should handle "focus" event', () => {
        const handleFocusDefault = vitest.fn();
        const handleFocusCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onFocus={handleFocusDefault}
            onFocusCapture={handleFocusCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleFocusDefault).not.toHaveBeenCalled();
        expect(handleFocusCapture).not.toHaveBeenCalled();
        fireEvent.focus(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleFocusDefault).toHaveBeenCalled();
        expect(handleFocusCapture).toHaveBeenCalled();
      });

    });

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(SELECT_OPTION_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveRole('option');
      });

      it('renders correctly with accessible role', () => {
        const role: SelectOptionProps['role'] = 'none';
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            role={role}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveAccessibleName(OPTION_LABEL);
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: SelectOptionProps['aria-label'] = 'select-option';
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            aria-label={ariaLabel}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles focus using the keyboard', async () => {
        const handleFocus = vitest.fn();
        const handleBlur  = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />,
          RENDER_OPTIONS
        );
        expect(handleFocus).not.toHaveBeenCalled();
        expect(handleBlur).not.toHaveBeenCalled();
        await userEvent.tab();
        expect(handleFocus).toHaveBeenCalledTimes(1);
        expect(handleBlur).not.toHaveBeenCalled();
        await userEvent.tab({ shift: true });
        expect(handleFocus).toHaveBeenCalledTimes(1);
        expect(handleBlur).toHaveBeenCalledTimes(1);
      });

      it('correctly handles click using the keyboard', async () => {
        const handleClick = vitest.fn();
        render(
          <SelectOption
            data-testid={SELECT_OPTION_TEST_ID}
            label={OPTION_LABEL}
            value={OPTION_VALUE}
            onClick={handleClick}
            autoFocus
          />,
          RENDER_OPTIONS
        );
        expect(handleClick).not.toHaveBeenCalled();
        await userEvent.keyboard('[Space]');
        expect(handleClick).toHaveBeenCalledTimes(1);
        await userEvent.keyboard('[Enter]');
        expect(handleClick).toHaveBeenCalledTimes(2);
      });

    });

  });

});