/*
  eslint-disable
    max-lines,
    max-lines-per-function
*/

import {
  Fragment
} from 'react';

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
  Toggle,
  ButtonClasses,
  ToggleProps
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const TOGGLE_TEST_ID = v4();

describe('shared/ui/toggle', () => {

  describe('properties', () => {

    describe('the component should render with the correct "autoFocus"', () => {

      it('renders correctly without "authFocus"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveFocus();
      });

      it('renders correctly with "autoFocus" equal to "false"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} autoFocus={false} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveFocus();
      });

      it('renders correctly with "autoFocus" equal to "true"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} autoFocus={true} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveFocus();
      });

    });

    describe('the component should render with the correct "children"', () => {

      it('renders correctly without "children"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "children"', () => {
        const textContent = 'button text';
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} children={textContent} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveTextContent(textContent);
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} className={className1} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} className={`${className1} ${className2}`} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button'], className1, className2);
      });

    });

    describe('the component should render with the correct "disabled"', () => {

      it('renders correctly without "disabled"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeDisabled();
      });

      it('renders correctly with "disabled" equal to "false"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} disabled={false} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeDisabled();
      });

      it('renders correctly with "disabled" equal to "true"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} disabled={true} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeDisabled();
      });

    });

    describe('the component should render with the correct "endIcon"', () => {

      it('renders correctly without "endIcon"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "endIcon"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} endIcon={StarIcon} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).toHaveClass('lucide-star');
      });

    });

    describe('the component should render with the correct "fullWidth"', () => {

      it('renders correctly without "fullWidth"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveClass(ButtonClasses['button--full-width']);
      });

      it('renders correctly with "fullWidth" equal to "false"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} fullWidth={false} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveClass(ButtonClasses['button--full-width']);

      });

      it('renders correctly with "fullWidth" equal to "true"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} fullWidth={true} />,
          RENDER_OPTIONS
        );
        screen.debug();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--full-width']);
      });

    });

    describe('the component should render with the correct "justify"', () => {

      it('renders correctly with default "justify"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--justify-center']);
      });

      it('renders correctly with "justify" equal to "start"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} justify="start" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--justify-start']);
      });

      it('renders correctly with "justify" equal to "center"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} justify="center" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--justify-center']);
      });

      it('renders correctly with "justify" equal to "end"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} justify="end" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--justify-end']);
      });

    });

    describe('the component should render with the correct "loading"', () => {

      it('renders correctly without "loading"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeDisabled();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveClass(ButtonClasses['button--loading']);
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector(`.${ButtonClasses['button-loader']}`)).not.toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).not.toBeInTheDocument();
      });

      it('renders correctly with "loading" equal to "false"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} loading={false} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeDisabled();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveClass(ButtonClasses['button--loading']);
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector(`.${ButtonClasses['button-loader']}`)).not.toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).not.toBeInTheDocument();

      });

      it('renders correctly with "loading" equal to "true"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} loading={true} />,
          RENDER_OPTIONS
        );
        screen.debug();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeDisabled();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--loading']);
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector(`.${ButtonClasses['button-loader']}`)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).toHaveClass('lucide', 'lucide-loader-circle');
      });

    });

    describe('the component should render with the correct "name"', () => {

      it('renders correctly without "name"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveAttribute('name');
      });

      it('renders correctly with "name"', () => {
        const name = 'button text';
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} name={name} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAttribute('name', name);
      });

    });

    describe('the component should render with the correct "onlyIcon"', () => {

      it('renders correctly with default "onlyIcon"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveClass(ButtonClasses['button--only-icon']);
      });

      it('renders correctly with "onlyIcon" equal to "false"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} onlyIcon={false} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveClass(ButtonClasses['button--only-icon']);

      });

      it('renders correctly with "onlyIcon" equal to "true"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} onlyIcon={true} />,
          RENDER_OPTIONS
        );
        screen.debug();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--only-icon']);
      });

    });

    describe('the component should render with the correct "size"', () => {

      it('renders correctly with default "size"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--size-medium']);
      });

      it('renders correctly with "size" equal to "small"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} size="small" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--size-small']);
      });

      it('renders correctly with "size" equal to "medium"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} size="medium" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--size-medium']);
      });

      it('renders correctly with "size" equal to "large"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} size="large" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--size-large']);
      });

    });

    describe('the component should render with the correct "startIcon"', () => {

      it('renders correctly without "startIcon"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "startIcon"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} startIcon={InfoIcon} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID).querySelector('svg')).toHaveClass('lucide-info');
      });

    });

    describe('the component should render with the correct "type"', () => {

      it('renders correctly with default "type"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAttribute('type', 'button');
      });

      it('renders correctly with "type" equal to "button"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} type="button" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAttribute('type', 'button');
      });

      it('renders correctly with "type" equal to "submit"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} type="submit" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAttribute('type', 'submit');
      });

      it('renders correctly with "type" equal to "reset"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} type="reset" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAttribute('type', 'reset');
      });

    });

    describe('the component should render with the correct "defaultVariant"', () => {

      it('renders correctly with default "defaultVariant"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-ghost']);
      });

      it('renders correctly with "defaultVariant" equal to "primary"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} defaultVariant="primary" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-primary']);
      });

      it('renders correctly with "defaultVariant" equal to "secondary"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} defaultVariant="secondary" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-secondary']);
      });

      it('renders correctly with "defaultVariant" equal to "outlined"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} defaultVariant="outlined" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-outlined']);
      });

      it('renders correctly with "defaultVariant" equal to "ghost"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} defaultVariant="ghost" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-ghost']);
      });

      it('renders correctly with "defaultVariant" equal to "destructive"', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} defaultVariant="destructive" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-destructive']);
      });

    });

    describe('the component should render with the correct "selectedVariant"', () => {

      it('renders correctly with default "selectedVariant"', () => {
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            selected
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-secondary']);
      });

      it('renders correctly with "selectedVariant" equal to "primary"', () => {
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            selected
            selectedVariant="primary"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-primary']);
      });

      it('renders correctly with "selectedVariant" equal to "secondary"', () => {
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            selected
            selectedVariant="secondary"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-secondary']);
      });

      it('renders correctly with "selectedVariant" equal to "outlined"', () => {
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            selected
            selectedVariant="outlined"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-outlined']);
      });

      it('renders correctly with "selectedVariant" equal to "ghost"', () => {
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            selected
            selectedVariant="ghost"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-ghost']);
      });

      it('renders correctly with "selectedVariant" equal to "destructive"', () => {
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            selected
            selectedVariant="destructive"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveClass(ButtonClasses['button--variant-destructive']);
      });

    });

  });

  describe('event handling', () => {

    describe('form events', () => {

      it('the component should handle "blur" event', () => {
        const handleBlurDefault = vitest.fn();
        const handleBlurCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onBlur={handleBlurDefault}
            onBlurCapture={handleBlurCapture}
            autoFocus
          />,
          RENDER_OPTIONS
        );
        expect(handleBlurDefault).not.toHaveBeenCalled();
        expect(handleBlurCapture).not.toHaveBeenCalled();
        fireEvent.blur(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleBlurDefault).toHaveBeenCalled();
        expect(handleBlurCapture).toHaveBeenCalled();
      });

      it('the component should handle "focus" event', () => {
        const handleFocusDefault = vitest.fn();
        const handleFocusCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onFocus={handleFocusDefault}
            onFocusCapture={handleFocusCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleFocusDefault).not.toHaveBeenCalled();
        expect(handleFocusCapture).not.toHaveBeenCalled();
        fireEvent.focus(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleFocusDefault).toHaveBeenCalled();
        expect(handleFocusCapture).toHaveBeenCalled();
      });

    });

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(TOGGLE_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveRole('button');
      });

      it('renders correctly with accessible role', () => {
        const role: ToggleProps['role'] = 'none';
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} role={role} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name (attribute)', () => {
        const ariaLabel: ToggleProps['aria-label'] = 'button';
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} aria-label={ariaLabel} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

      it('renders correctly with accessible name (children)', () => {
        const children: ToggleProps['children'] = 'button';
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} children={children} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAccessibleName(children);
      });

    });

    describe('the component should render with the correct accessible description', () => {

      it('renders correctly without accessible description', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveAccessibleDescription();
      });

      it('renders correctly with accessible description', () => {
        const ariaDescription: ToggleProps['aria-description'] = 'button';
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} aria-description={ariaDescription} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAccessibleDescription(ariaDescription);
      });

    });

    describe('the component should render with the correct accessible error message', () => {

      it('renders correctly without accessible error message', () => {
        render(
          <Toggle data-testid={TOGGLE_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).not.toHaveAccessibleErrorMessage();
      });

      it('renders correctly with accessible error message', () => {
        const errorMessageId: ToggleProps['aria-errormessage'] = 'message-id';
        render(
          <Fragment>
            <Toggle
              data-testid={TOGGLE_TEST_ID}
              aria-invalid="true"
              aria-errormessage={errorMessageId}
            />
            <p
              data-testid={errorMessageId}
              id={errorMessageId}
              children="something went wrong"
            />
          </Fragment>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOGGLE_TEST_ID)).toHaveAccessibleErrorMessage(screen.getByTestId(errorMessageId).textContent);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles focus using the keyboard', async () => {
        const handleFocus = vitest.fn();
        const handleBlur  = vitest.fn();
        render(
          <Toggle
            data-testid={TOGGLE_TEST_ID}
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
          <Toggle
            data-testid={TOGGLE_TEST_ID}
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