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
  Separator,
  SeparatorProps,
  SeparatorClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const SEPARATOR_TEST_ID = v4();

describe('shared/ui/separator/separator', () => {

  describe('properties', () => {

    describe('the component should render with the correct "children"', () => {

      it('renders correctly without "children"', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveTextContent('');
      });

      it('renders correctly with "children"', () => {
        const children = v4();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            children={children}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveTextContent(children);
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            className={className1}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            className={`${className1} ${className2}`}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator'], className1, className2);
      });

    });

    describe('the component should render with the correct "orientation"', () => {

      it('renders correctly without "orientation"', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--orientation-horizontal']);
      });

      it('renders correctly with "orientation" equal to "horizontal"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            orientation="horizontal"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--orientation-horizontal']);
      });

      it('renders correctly with "className" equal to "vertical"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            orientation="vertical"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--orientation-vertical']);
      });

    });

    describe('the component should render with the correct "padding"', () => {

      it('renders correctly without "padding"', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).not.toHaveClass(/separator--padding/);
      });

      it('renders correctly with "padding" equal to "xs"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="xs"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-xs']);
      });

      it('renders correctly with "padding" equal to "sm"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="sm"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-sm']);
      });

      it('renders correctly with "padding" equal to "md"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="md"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-md']);
      });

      it('renders correctly with "padding" equal to "lg"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="lg"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-lg']);
      });

      it('renders correctly with "padding" equal to "xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-xl']);
      });

      it('renders correctly with "padding" equal to "2xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="2xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-2xl']);
      });

      it('renders correctly with "padding" equal to "3xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="3xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-3xl']);
      });

      it('renders correctly with "padding" equal to "4xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="4xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-4xl']);
      });

      it('renders correctly with "padding" equal to "5xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="5xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-5xl']);
      });

      it('renders correctly with "padding" equal to "6xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="6xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-6xl']);
      });

      it('renders correctly with "padding" equal to "7xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="7xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-7xl']);
      });

      it('renders correctly with "padding" equal to "8xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="8xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-8xl']);
      });

      it('renders correctly with "padding" equal to "9xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="9xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-9xl']);
      });

      it('renders correctly with "padding" equal to "10xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="10xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-10xl']);
      });

      it('renders correctly with "padding" equal to "11xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="11xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-11xl']);
      });

      it('renders correctly with "padding" equal to "12xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            padding="12xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--padding-12xl']);
      });

    });

    describe('the component should render with the correct "gap"', () => {

      it('renders correctly without "gap"', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).not.toHaveClass(/separator--gap/);
      });

      it('renders correctly with "gap" equal to "xs"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="xs"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-xs']);
      });

      it('renders correctly with "gap" equal to "sm"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="sm"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-sm']);
      });

      it('renders correctly with "gap" equal to "md"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="md"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-md']);
      });

      it('renders correctly with "gap" equal to "lg"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="lg"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-lg']);
      });

      it('renders correctly with "gap" equal to "xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-xl']);
      });

      it('renders correctly with "gap" equal to "2xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="2xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-2xl']);
      });

      it('renders correctly with "gap" equal to "3xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="3xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-3xl']);
      });

      it('renders correctly with "gap" equal to "4xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="4xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-4xl']);
      });

      it('renders correctly with "gap" equal to "5xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="5xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-5xl']);
      });

      it('renders correctly with "gap" equal to "6xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="6xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-6xl']);
      });

      it('renders correctly with "gap" equal to "7xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="7xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-7xl']);
      });

      it('renders correctly with "gap" equal to "8xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="8xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-8xl']);
      });

      it('renders correctly with "gap" equal to "9xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="9xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-9xl']);
      });

      it('renders correctly with "gap" equal to "10xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="10xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-10xl']);
      });

      it('renders correctly with "gap" equal to "11xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="11xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-11xl']);
      });

      it('renders correctly with "gap" equal to "12xl"', () => {
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            gap="12xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(SeparatorClasses['separator--gap-12xl']);
      });

    });

  });

  describe('event handling', () => {

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(SEPARATOR_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveRole('none');
      });

      it('renders correctly with accessible role', () => {
        const role: SeparatorProps['role'] = 'generic';
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            role={role}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Separator data-testid={SEPARATOR_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: SeparatorProps['aria-label'] = 'separator';
        render(
          <Separator
            data-testid={SEPARATOR_TEST_ID}
            aria-label={ariaLabel}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

  });

});