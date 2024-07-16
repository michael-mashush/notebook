import {
  Fragment
} from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import {
  userEvent
} from '@testing-library/user-event';

import {
  TRANSITION_DELAY_150,
  sleep
} from 'shared/lib';

import {
  Tooltip,
  TooltipProps,
  TooltipClasses,
  Button
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const TOOLTIP_TEST_ID = v4();
const TRIGGER_TEST_ID = v4();

describe('shared/ui/tooltip', () => {

  const helperText = v4();
  const buttonText = v4();

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value:    vitest.fn().mockImplementation((query) => ({
        matches:             false,
        media:               query,
        onchange:            null,
        addListener:         vitest.fn(),
        removeListener:      vitest.fn(),
        addEventListener:    vitest.fn(),
        removeEventListener: vitest.fn(),
        dispatchEvent:       vitest.fn()
      }))
    });
  });

  describe('properties', () => {

    describe('the component should render with the correct "children"', () => {

      it('renders correctly with "children"', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TRIGGER_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TRIGGER_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(TRIGGER_TEST_ID)).toHaveTextContent(buttonText);
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveClass(TooltipClasses['tooltip']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText} className={className1}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveClass(TooltipClasses['tooltip'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText} className={`${className1} ${className2}`}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveClass(TooltipClasses['tooltip'], className1, className2);
      });

    });

    describe('the component should render with the correct "opened"', () => {

      it('renders correctly without "opened"', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(TOOLTIP_TEST_ID)).not.toBeInTheDocument();
      });

      it('renders correctly with "opened" equal to "false"', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened={false} title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(TOOLTIP_TEST_ID)).not.toBeInTheDocument();
      });

      it('renders correctly with "opened" equal to "true"', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened={true} title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveRole('tooltip');
      });

      it('renders correctly with accessible role', () => {
        const role: TooltipProps['role'] = 'none';
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText} role={role}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveAccessibleName(helperText);
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: TooltipProps['aria-label'] = 'tooltip';
        render(
          <Tooltip data-testid={TOOLTIP_TEST_ID} opened title={helperText} aria-label={ariaLabel}>
            <Button
              data-testid={TRIGGER_TEST_ID}
              children={buttonText}
            />
          </Tooltip>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TOOLTIP_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles open/close using the keyboard', async () => {
        render(
          <Fragment>
            <Tooltip data-testid={TOOLTIP_TEST_ID} title={helperText}>
              <Button
                data-testid={TRIGGER_TEST_ID}
                children={buttonText}
              />
            </Tooltip>
            <Button>
              Next button
            </Button>
          </Fragment>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(TOOLTIP_TEST_ID)).not.toBeInTheDocument();
        await userEvent.tab();
        expect(screen.queryByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
        await userEvent.tab();
        await sleep(TRANSITION_DELAY_150 * 1000);
        expect(screen.queryByTestId(TOOLTIP_TEST_ID)).not.toBeInTheDocument();
      });

    });

  });

});