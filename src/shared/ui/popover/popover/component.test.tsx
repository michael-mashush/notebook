/*
  eslint-disable
    max-lines
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
  TRANSITION_DELAY_150,
  sleep
} from 'shared/lib';

import {
  Popover,
  PopoverContent,
  PopoverContentClasses,
  PopoverTrigger,
  Button
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const POPOVER_TEST_ID         = v4();
const POPOVER_TRIGGER_TEST_ID = v4();
const POPOVER_CONTENT_TEST_ID = v4();

describe('shared/ui/popover/popover', () => {

  const triggerText = v4();
  const contentText = v4();

  describe('properties', () => {

    describe('the component should render with the correct "position"', () => {

      it('renders correctly without "position"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(POPOVER_CONTENT_TEST_ID)).toHaveClass(/popover-content--position/);
      });

      it('renders correctly with "position"', () => {
        const className1 = v4();
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened position="top-center">
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
              className={className1}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(POPOVER_CONTENT_TEST_ID)).toHaveClass(/popover-content--position/);
      });

    });

    describe('the component should render with the correct "opened"', () => {

      it('renders correctly without "opened"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
      });

      it('renders correctly with "opened" equal to "false"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened={false}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
              triggerWidth={false}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
      });

      it('renders correctly with "opened" equal to "true"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened={true}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
              triggerWidth={false}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

    });

    describe('the component should render with the correct "disableClick"', () => {

      it('renders correctly without "disableClick"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.click(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

      it('renders correctly with "disableClick" equal to "false"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen} disableClick={false}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.click(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

      it('renders correctly with "disableClick" equal to "true"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen} disableClick={true}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.click(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
      });

    });

    describe('the component should render with the correct "disableFocus"', () => {

      it('renders correctly without "disableFocus"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.focus(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

      it('renders correctly with "disableFocus" equal to "false"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen} disableFocus={false}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.focus(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

      it('renders correctly with "disableFocus" equal to "true"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen} disableFocus={true}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.focus(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
      });

    });

    describe('the component should render with the correct "disableHover"', () => {

      it('renders correctly without "disableHover"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.mouseEnter(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

      it('renders correctly with "disableHover" equal to "false"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen} disableHover={false}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.mouseEnter(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
      });

      it('renders correctly with "disableHover" equal to "true"', () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen} disableHover={true}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        fireEvent.mouseEnter(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
      });

    });

    describe('the component should render with the correct "disableInteractive', () => {

      it('renders correctly without "disableInteractive"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toHaveClass(PopoverContentClasses['popover-content--non-interactive']);
      });

      it('renders correctly with "disableInteractive" equal to "false"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened disableInteractive={false}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toHaveClass(PopoverContentClasses['popover-content--non-interactive']);
      });

      it('renders correctly with "disableInteractive" equal to "true"', () => {
        render(
          <Popover data-testid={POPOVER_TEST_ID} opened disableInteractive={true}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toHaveClass(PopoverContentClasses['popover-content--non-interactive']);
      });

    });

  });

  describe('event handling', () => {

    describe('custom events', () => {

      it('the component should handle "open" event', async () => {
        const handleOpen = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onOpen={handleOpen}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        await userEvent.click(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(handleOpen).toHaveBeenCalled();
      });

      it('the component should handle "close" event', async () => {
        const handleClose = vitest.fn();
        render(
          <Popover data-testid={POPOVER_TEST_ID} onClose={handleClose}>
            <PopoverTrigger>
              <Button
                data-testid={POPOVER_TRIGGER_TEST_ID}
                children={triggerText}
              />
            </PopoverTrigger>
            <PopoverContent
              data-testid={POPOVER_CONTENT_TEST_ID}
              children={contentText}
            />
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        await userEvent.click(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).toBeInTheDocument();
        await userEvent.click(screen.getByTestId(POPOVER_TRIGGER_TEST_ID));
        await sleep(TRANSITION_DELAY_150 * 1000);
        expect(screen.queryByTestId(POPOVER_CONTENT_TEST_ID)).not.toBeInTheDocument();
        expect(handleClose).toHaveBeenCalled();
      });

    });

  });

});