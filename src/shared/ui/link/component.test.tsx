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
  Link,
  LinkProps,
  LinkClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const LINK_TEST_ID = v4();

describe('shared/ui/link', () => {

  describe('properties', () => {

    describe('the component should render with the correct "children"', () => {

      it('renders correctly without "children"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "children"', () => {
        const textContent = 'button text';
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            children={textContent}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveTextContent(textContent);
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            className={className1}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            className={`${className1} ${className2}`}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link'], className1, className2);
      });

    });

    describe('the component should render with the correct "referrerPolicy"', () => {

      it('renders correctly without "referrerPolicy"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).not.toHaveAttribute('referrerPolicy');
      });

      it('renders correctly with "referrerPolicy" equal to "no-referrer"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="no-referrer"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'no-referrer');
      });

      it('renders correctly with "referrerPolicy" equal to "no-referrer-when-downgrade"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="no-referrer-when-downgrade"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'no-referrer-when-downgrade');
      });

      it('renders correctly with "referrerPolicy" equal to "origin"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'origin');
      });

      it('renders correctly with "referrerPolicy" equal to "origin-when-cross-origin"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="origin-when-cross-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'origin-when-cross-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "same-origin"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="same-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'same-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "strict-origin"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="strict-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'strict-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "strict-origin-when-cross-origin"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="strict-origin-when-cross-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'strict-origin-when-cross-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "unsafe-url"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            referrerPolicy="unsafe-url"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'unsafe-url');
      });

    });

    describe('the component should render with the correct "rel"', () => {

      it('renders correctly without "rel"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).not.toHaveAttribute('rel');
      });

      it('renders correctly with "rel" equal to "alternate"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="alternate"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'alternate');
      });

      it('renders correctly with "rel" equal to "author"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="author"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'author');
      });

      it('renders correctly with "rel" equal to "bookmark"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="bookmark"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'bookmark');
      });

      it('renders correctly with "rel" equal to "external"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="external"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'external');
      });

      it('renders correctly with "rel" equal to "help"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="help"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'help');
      });

      it('renders correctly with "rel" equal to "license"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="license"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'license');
      });

      it('renders correctly with "rel" equal to "next"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="next"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'next');
      });

      it('renders correctly with "rel" equal to "nofollow"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="nofollow"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'nofollow');
      });

      it('renders correctly with "rel" equal to "noreferrer"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="noreferrer"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'noreferrer');
      });

      it('renders correctly with "rel" equal to "noopener"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="noopener"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'noopener');
      });

      it('renders correctly with "rel" equal to "prev"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="prev"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'prev');
      });

      it('renders correctly with "rel" equal to "search"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="search"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'search');
      });

      it('renders correctly with "rel" equal to "tag"', () => {
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            rel="tag"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('rel', 'tag');
      });

    });

    describe('the component should render with the correct "target"', () => {

      it('renders correctly without "target"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).not.toHaveAttribute('target');
      });

      it('renders correctly with "target" equal to "_blank"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" target="_blank" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_blank');
      });

      it('renders correctly with "target" equal to "_parent"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" target="_parent" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_parent');
      });

      it('renders correctly with "target" equal to "_self"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" target="_self" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_self');
      });

      it('renders correctly with "target" equal to "_top"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" target="_top" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_top');
      });

    });

    describe('the component should render with the correct "underline"', () => {

      it('renders correctly without "underline"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link--underline-never']);
      });

      it('renders correctly with "underline" equal to "always"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" underline="always" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link--underline-always']);
      });

      it('renders correctly with "underline" equal to "interactive"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" underline="interactive" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link--underline-interactive']);
      });

      it('renders correctly with "underline" equal to "never"', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" underline="never" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveClass(LinkClasses['link--underline-never']);
      });

    });

  });

  describe('event handling', () => {

    describe('form events', () => {

      it('the component should handle "blur" event', () => {
        const handleBlurDefault = vitest.fn();
        const handleBlurCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onBlur={handleBlurDefault}
            onBlurCapture={handleBlurCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleBlurDefault).not.toHaveBeenCalled();
        expect(handleBlurCapture).not.toHaveBeenCalled();
        fireEvent.blur(screen.getByTestId(LINK_TEST_ID));
        expect(handleBlurDefault).toHaveBeenCalled();
        expect(handleBlurCapture).toHaveBeenCalled();
      });

      it('the component should handle "focus" event', () => {
        const handleFocusDefault = vitest.fn();
        const handleFocusCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onFocus={handleFocusDefault}
            onFocusCapture={handleFocusCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleFocusDefault).not.toHaveBeenCalled();
        expect(handleFocusCapture).not.toHaveBeenCalled();
        fireEvent.focus(screen.getByTestId(LINK_TEST_ID));
        expect(handleFocusDefault).toHaveBeenCalled();
        expect(handleFocusCapture).toHaveBeenCalled();
      });

    });

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(LINK_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(LINK_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(LINK_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(LINK_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(LINK_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(LINK_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(LINK_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(LINK_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(LINK_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(LINK_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(LINK_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveRole('link');
      });

      it('renders correctly with accessible role', () => {
        const role: LinkProps['role'] = 'none';
        render(
          <Link data-testid={LINK_TEST_ID} href="/" role={role} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Link data-testid={LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name (attribute)', () => {
        const ariaLabel: LinkProps['aria-label'] = 'anchor';
        render(
          <Link data-testid={LINK_TEST_ID} href="/" aria-label={ariaLabel} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

      it('renders correctly with accessible name (children)', () => {
        const children: LinkProps['children'] = 'anchor';
        render(
          <Link data-testid={LINK_TEST_ID} href="/" children={children} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(LINK_TEST_ID)).toHaveAccessibleName(children);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles focus using the keyboard', async () => {
        const handleFocus = vitest.fn();
        const handleBlur  = vitest.fn();
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href="/"
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
        const href = '/test';
        render(
          <Link
            data-testid={LINK_TEST_ID}
            href={href}
          />,
          RENDER_OPTIONS
        );
        await userEvent.tab();
        expect(window.location.pathname).toBe('/');
        await userEvent.keyboard('[Enter]');
        expect(window.location.pathname).toBe(href);
      });

    });

  });

});