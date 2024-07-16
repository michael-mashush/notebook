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
  Select,
  SelectClasses,
  SelectOption,
  SelectProps,
  TextboxClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const SELECT_TEST_ID = v4();

const SELECT_OPTION_1_TEST_ID = v4();
const SELECT_OPTION_2_TEST_ID = v4();
const SELECT_OPTION_3_TEST_ID = v4();

describe('shared/ui/switch', () => {

  describe('properties', () => {

    describe('the component should render with the correct "autoFocus"', () => {

      it('renders correctly without "authFocus"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveFocus();
      });

      it('renders correctly with "autoFocus" equal to "false"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} autoFocus={false}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveFocus();
      });

      it('renders correctly with "autoFocus" equal to "true"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} autoFocus={true}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveFocus();
      });

    });

    describe('the component should render with the correct "autoClose"', () => {

      it('renders correctly without "autoClose"', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toHaveClass(SelectClasses['select--opened']);
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toHaveClass(SelectClasses['select--opened']);
      });

      it('renders correctly with "autoClose" equal to "false"', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened autoClose={false}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toHaveClass(SelectClasses['select--opened']);
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toHaveClass(SelectClasses['select--opened']);
      });

      it('renders correctly with "autoClose" equal to "true"', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened autoClose={true}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toHaveClass(SelectClasses['select--opened']);
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID).closest(`.${SelectClasses['select']}`)).not.toHaveClass(SelectClasses['select--opened']);
      });

    });

    describe('the component should render with the correct "cancelable"', () => {

      it('renders correctly without "cancelable"', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveValue();
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveValue();
      });

      it('renders correctly with "cancelable" equal to "false"', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened cancelable={false}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveValue();
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveValue();
      });

      it('renders correctly with "autoFocus" equal to "true"', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened cancelable={true}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveValue();
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        await userEvent.click(screen.getByTestId(SELECT_OPTION_1_TEST_ID));
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveValue();
      });

    });

    describe('the component should render with the correct "children"', () => {

      it('renders correctly with "children"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_1_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_2_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_OPTION_3_TEST_ID)).toBeInTheDocument();
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveClass(TextboxClasses['textbox']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Select data-testid={SELECT_TEST_ID} className={className1}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveClass(TextboxClasses['textbox'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Select data-testid={SELECT_TEST_ID} className={`${className1} ${className2}`}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveClass(TextboxClasses['textbox'], className1, className2);
      });

    });

    describe('the component should render with the correct "disabled"', () => {

      it('renders correctly without "disabled"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toBeDisabled();
      });

      it('renders correctly with "disabled" equal to "false"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} disabled={false}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toBeDisabled();
      });

      it('renders correctly with "disabled" equal to "true"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} disabled={true}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeDisabled();
      });

    });

    describe('the component should render with the correct "invalid"', () => {

      it('renders correctly without "invalid"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveClass(TextboxClasses['textbox--invalid']);
      });

      it('renders correctly with "invalid" equal to "false"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} invalid={false}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveClass(TextboxClasses['textbox--invalid']);
      });

      it('renders correctly with "invalid" equal to "true"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID} invalid={true}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveClass(TextboxClasses['textbox--invalid']);
      });

    });

    describe('the component should render with the correct "name"', () => {

      it('renders correctly without "name"', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveAttribute('name');
      });

      it('renders correctly with "name"', () => {
        const name = 'button text';
        render(
          <Select data-testid={SELECT_TEST_ID} name={name}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveAttribute('name', name);
      });

    });

  });

  describe('event handling', () => {

    describe('form events', () => {

      it('the component should handle "blur" event', () => {
        const handleBlurDefault = vitest.fn();
        const handleBlurCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onBlur={handleBlurDefault}
            onBlurCapture={handleBlurCapture}
            autoFocus
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleBlurDefault).not.toHaveBeenCalled();
        expect(handleBlurCapture).not.toHaveBeenCalled();
        fireEvent.blur(screen.getByTestId(SELECT_TEST_ID));
        expect(handleBlurDefault).toHaveBeenCalled();
        expect(handleBlurCapture).toHaveBeenCalled();
      });

      it('the component should handle "focus" event', () => {
        const handleFocusDefault = vitest.fn();
        const handleFocusCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onFocus={handleFocusDefault}
            onFocusCapture={handleFocusCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleFocusDefault).not.toHaveBeenCalled();
        expect(handleFocusCapture).not.toHaveBeenCalled();
        fireEvent.focus(screen.getByTestId(SELECT_TEST_ID));
        expect(handleFocusDefault).toHaveBeenCalled();
        expect(handleFocusCapture).toHaveBeenCalled();
      });

      it('the component should handle "change" event', async () => {
        const handleChangeDefault = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onChange={handleChangeDefault}
            opened
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleChangeDefault).not.toHaveBeenCalled();
        await userEvent.click(screen.getByTestId(SELECT_OPTION_3_TEST_ID));
        expect(handleChangeDefault).toHaveBeenCalled();
      });

      it('the component should handle "invalid" event', () => {
        const handleInvalidDefault = vitest.fn();
        const handleInvalidCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onInvalid={handleInvalidDefault}
            onInvalidCapture={handleInvalidCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleInvalidDefault).not.toHaveBeenCalled();
        expect(handleInvalidCapture).not.toHaveBeenCalled();
        fireEvent.invalid(screen.getByTestId(SELECT_TEST_ID));
        expect(handleInvalidDefault).toHaveBeenCalled();
        expect(handleInvalidCapture).toHaveBeenCalled();
      });

    });

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(SELECT_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(SELECT_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(SELECT_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(SELECT_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseEnter={handleMouseEnterDefault}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseLeave={handleMouseLeaveDefault}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(SELECT_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(SELECT_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(SELECT_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(SELECT_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(SELECT_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(SELECT_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerEnter={handlePointerEnterDefault}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerLeave={handlePointerLeaveDefault}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(SELECT_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveRole('combobox');
      });

      it('renders correctly with accessible role', () => {
        const role: SelectProps['role'] = 'none';
        render(
          <Select data-testid={SELECT_TEST_ID} role={role}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: SelectProps['aria-label'] = 'select';
        render(
          <Select data-testid={SELECT_TEST_ID} aria-label={ariaLabel}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

    describe('the component should render with the correct accessible description', () => {

      it('renders correctly without accessible description', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveAccessibleDescription();
      });

      it('renders correctly with accessible description', () => {
        const ariaDescription: SelectProps['aria-description'] = 'button';
        render(
          <Select data-testid={SELECT_TEST_ID} aria-description={ariaDescription}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveAccessibleDescription(ariaDescription);
      });

    });

    describe('the component should render with the correct accessible error message', () => {

      it('renders correctly without accessible error message', () => {
        render(
          <Select data-testid={SELECT_TEST_ID}>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).not.toHaveAccessibleErrorMessage();
      });

      it('renders correctly with accessible error message', () => {
        const errorMessageId: SelectProps['aria-errormessage'] = 'message-id';
        render(
          <Fragment>
            <Select data-testid={SELECT_TEST_ID} aria-invalid="true" aria-errormessage={errorMessageId}>
              <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
              <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
              <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
            </Select>
            <p
              data-testid={errorMessageId}
              id={errorMessageId}
              children="something went wrong"
            />
          </Fragment>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_TEST_ID)).toHaveAccessibleErrorMessage(screen.getByTestId(errorMessageId).textContent);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles focus using the keyboard', async () => {
        const handleFocus = vitest.fn();
        const handleBlur  = vitest.fn();
        render(
          <Select
            data-testid={SELECT_TEST_ID}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
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

      it('correctly handles open/close using the keyboard', async () => {
        const handleOpen  = vitest.fn();
        const handleClose = vitest.fn();
        render(
          <Select data-testid={SELECT_TEST_ID} onOpen={handleOpen} onClose={handleClose} autoFocus>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(handleOpen).not.toHaveBeenCalled();
        expect(handleClose).not.toHaveBeenCalled();
        await userEvent.keyboard('{Enter}');
        expect(handleOpen).toHaveBeenCalledTimes(1);
        expect(handleClose).not.toHaveBeenCalled();
        await userEvent.keyboard('{Escape}');
        expect(handleOpen).toHaveBeenCalledTimes(1);
        expect(handleClose).toHaveBeenCalledTimes(1);
      });

      it('correctly handles option focus using the keyboard', async () => {
        render(
          <Select data-testid={SELECT_TEST_ID} opened>
            <SelectOption data-testid={SELECT_OPTION_1_TEST_ID} value="1" label="1" />
            <SelectOption data-testid={SELECT_OPTION_2_TEST_ID} value="2" label="2" />
            <SelectOption data-testid={SELECT_OPTION_3_TEST_ID} value="3" label="3" />
          </Select>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(SELECT_OPTION_1_TEST_ID)).toHaveFocus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByTestId(SELECT_OPTION_2_TEST_ID)).toHaveFocus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByTestId(SELECT_OPTION_3_TEST_ID)).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByTestId(SELECT_OPTION_2_TEST_ID)).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByTestId(SELECT_OPTION_1_TEST_ID)).toHaveFocus();
      });

    });

  });

});