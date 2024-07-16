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
  ConfirmDialog,
  ConfirmDialogProps,
  DialogClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const CONFIRM_DIALOG_TEST_ID = v4();

describe('shared/ui/dialog/confirm-dialog', () => {

  const title = v4();
  const text  = v4();

  describe('properties', () => {

    describe('the component should render with the correct "acceptText"', () => {

      it('renders correctly with default "acceptText"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText('Accept').parentElement).toBeInTheDocument();
        expect(screen.getByText('Accept').parentElement).toHaveRole('button');
      });

      it('renders correctly with "acceptText"', () => {
        const acceptText = v4();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            acceptText={acceptText}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText(acceptText).parentElement).toBeInTheDocument();
        expect(screen.getByText(acceptText).parentElement).toHaveRole('button');
      });

    });

    describe('the component should render with the correct "cancelText"', () => {

      it('renders correctly with default "cancelText"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText('Cancel').parentElement).toBeInTheDocument();
        expect(screen.getByText('Cancel').parentElement).toHaveRole('button');
      });

      it('renders correctly with "cancelText"', () => {
        const cancelText = v4();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            cancelText={cancelText}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText(cancelText).parentElement).toBeInTheDocument();
        expect(screen.getByText(cancelText).parentElement).toHaveRole('button');
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toHaveClass(DialogClasses['dialog']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            className={className1}
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toHaveClass(DialogClasses['dialog'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            className={`${className1} ${className2}`}
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toHaveClass(DialogClasses['dialog'], className1, className2);
      });

    });

    describe('the component should render with the correct "opened"', () => {

      it('renders correctly without "opened"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(CONFIRM_DIALOG_TEST_ID)).not.toBeInTheDocument();
      });

      it('renders correctly with "opened" equal to "false"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened={false}
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(CONFIRM_DIALOG_TEST_ID)).not.toBeInTheDocument();
      });

      it('renders correctly with "opened" equal to "true"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened={true}
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
      });

    });

    describe('the component should render with the correct "text"', () => {

      it('renders correctly with "text"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(text)).toHaveRole('paragraph');
      });

    });

    describe('the component should render with the correct "title"', () => {

      it('renders correctly with "title"', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(title)).toHaveRole('heading');
      });

    });

  });

  describe('event handling', () => {

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(CONFIRM_DIALOG_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

    describe('custom events', () => {

      it('the component should handle "close" event', async () => {
        const handleClose = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onClose={handleClose}
          />,
          RENDER_OPTIONS
        );
        expect(handleClose).not.toHaveBeenCalled();
        await userEvent.click(screen.getByTestId(CONFIRM_DIALOG_TEST_ID).parentElement!.previousElementSibling!);
        expect(handleClose).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toHaveRole('dialog');
      });

      it('renders correctly with accessible role', () => {
        const role: ConfirmDialogProps['role'] = 'none';
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            role={role}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: ConfirmDialogProps['aria-label'] = 'dialog';
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            aria-label={ariaLabel}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CONFIRM_DIALOG_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles accept using the keyboard', async () => {
        const handleAccept = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onAccept={handleAccept}
          />,
          RENDER_OPTIONS
        );
        expect(handleAccept).not.toHaveBeenCalled();
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.keyboard('[Enter]');
        expect(handleAccept).toHaveBeenCalled();
      });

      it('correctly handles cancel using the keyboard', async () => {
        const handleCancel = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onCancel={handleCancel}
          />,
          RENDER_OPTIONS
        );
        expect(handleCancel).not.toHaveBeenCalled();
        await userEvent.tab();
        await userEvent.keyboard('[Enter]');
        expect(handleCancel).toHaveBeenCalled();
      });

      it('correctly handles close using the keyboard', async () => {
        const handleClose = vitest.fn();
        render(
          <ConfirmDialog
            data-testid={CONFIRM_DIALOG_TEST_ID}
            opened
            title={title}
            text={text}
            onClose={handleClose}
          />,
          RENDER_OPTIONS
        );
        expect(handleClose).not.toHaveBeenCalled();
        await userEvent.keyboard('[Escape]');
        expect(handleClose).toHaveBeenCalled();
      });

    });

  });

});