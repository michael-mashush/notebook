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
  InfoIcon,
  StarIcon
} from 'lucide-react';

import {
  Icon,
  IconProps,
  IconClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const ICON_TEST_ID = v4();

describe('shared/ui/icon', () => {

  describe('properties', () => {

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            className={className1}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            className={`${className1} ${className2}`}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon'], className1, className2);
      });

    });

    describe('the component should render with the correct "size"', () => {

      it('renders correctly without "size"', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon--size-medium']);
      });

      it('renders correctly with "className" equal to "small"', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            size="small"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon--size-small']);
      });

      it('renders correctly with "className" equal to "medium"', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            size="medium"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon--size-medium']);
      });

      it('renders correctly with "className" equal to "large"', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            size="large"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass(IconClasses['icon--size-large']);
      });

    });

    describe('the component should render with the correct "src"', () => {

      it('renders correctly with "src"', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={StarIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveClass('lucide-star');
      });

    });

  });

  describe('event handling', () => {

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(ICON_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(ICON_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(ICON_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(ICON_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(ICON_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(ICON_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(ICON_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(ICON_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(ICON_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(ICON_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(ICON_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveRole('img');
      });

      it('renders correctly with accessible role', () => {
        const role: IconProps['role'] = 'none';
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            role={role}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: IconProps['aria-label'] = 'icon';
        render(
          <Icon
            data-testid={ICON_TEST_ID}
            src={InfoIcon}
            aria-label={ariaLabel}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ICON_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

  });

});