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
  Heading,
  HeadingProps,
  HeadingClasses
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const HEADING_TEST_ID = v4();

describe('shared/ui/heading', () => {

  describe('properties', () => {

    describe('the component should render with the correct "align"', () => {

      it('renders correctly without "align"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--align-start']);
      });

      it('renders correctly with "align" equal to "start"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            align="start"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--align-start']);
      });

      it('renders correctly with "align" equal to "center"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            align="center"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--align-center']);
      });

      it('renders correctly with "align" equal to "end"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            align="end"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--align-end']);
      });

      it('renders correctly with "align" equal to "justify"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            align="justify"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--align-justify']);
      });

    });

    describe('the component should render with the correct "color"', () => {

      it('renders correctly without "color"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--color-default']);
      });

      it('renders correctly with "color" equal to "default"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            color="default"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--color-default']);
      });

      it('renders correctly with "color" equal to "current"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            color="current"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--color-current']);
      });

      it('renders correctly with "color" equal to "error"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            color="error"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--color-error']);
      });

      it('renders correctly with "color" equal to "muted"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            color="muted"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--color-muted']);
      });

    });

    describe('the component should render with the correct "level"', () => {

      it('renders correctly without "level"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('1');
      });

      it('renders correctly with "level" equal to "1"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            level="1"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('1');
      });

      it('renders correctly with "color" equal to "2"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            level="2"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('2');
      });

      it('renders correctly with "color" equal to "3"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            level="3"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('3');
      });

      it('renders correctly with "level" equal to "4"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            level="4"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('4');
      });

      it('renders correctly with "level" equal to "5"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            level="5"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('5');
      });

      it('renders correctly with "level" equal to "6"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            level="6"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID).tagName).toContain('6');
      });

    });

    describe('the component should render with the correct "size"', () => {

      it('renders correctly without "size"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-3xl']);
      });

      it('renders correctly with "size" equal to "xs"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="xs"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-xs']);
      });

      it('renders correctly with "size" equal to "sm"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="sm"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-sm']);
      });

      it('renders correctly with "size" equal to "md"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="md"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-md']);
      });

      it('renders correctly with "size" equal to "lg"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="lg"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-lg']);
      });

      it('renders correctly with "size" equal to "xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-xl']);
      });

      it('renders correctly with "size" equal to "2xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="2xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-2xl']);
      });

      it('renders correctly with "size" equal to "3xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="3xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-3xl']);
      });

      it('renders correctly with "size" equal to "4xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="4xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-4xl']);
      });

      it('renders correctly with "size" equal to "5xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="5xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-5xl']);
      });

      it('renders correctly with "size" equal to "6xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="6xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-6xl']);
      });

      it('renders correctly with "size" equal to "7xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="7xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-7xl']);
      });

      it('renders correctly with "size" equal to "8xl"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            size="8xl"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--size-8xl']);
      });

    });

    describe('the component should render with the correct "casing"', () => {

      it('renders correctly without "casing"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--casing-none']);
      });

      it('renders correctly with "casing" equal to "lowercase"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            casing="lowercase"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--casing-lowercase']);
      });

      it('renders correctly with "casing" equal to "uppercase"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            casing="uppercase"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--casing-uppercase']);

      });

      it('renders correctly with "casing" equal to "capitalize"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            casing="capitalize"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--casing-capitalize']);

      });

    });

    describe('the component should render with the correct "weight"', () => {

      it('renders correctly without "weight"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-bold']);
      });

      it('renders correctly with "weight" equal to "regular"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            weight="regular"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-regular']);
      });

      it('renders correctly with "weight" equal to "medium"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            weight="medium"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-medium']);
      });

      it('renders correctly with "weight" equal to "semibold"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            weight="semibold"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-semibold']);
      });

      it('renders correctly with "weight" equal to "bold"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            weight="bold"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-bold']);
      });

      it('renders correctly with "weight" equal to "extrabold"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            weight="extrabold"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-extrabold']);
      });

      it('renders correctly with "weight" equal to "black"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            weight="black"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--weight-black']);
      });

    });

    describe('the component should render with the correct "children"', () => {

      it('renders correctly without "children"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveTextContent('');
      });

      it('renders correctly with "children"', () => {
        const children = v4();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            children={children}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveTextContent(children);
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            className={className1}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            className={`${className1} ${className2}`}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading'], className1, className2);
      });

    });

    describe('the component should render with the correct "leading"', () => {

      it('renders correctly without "leading"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--leading-normal']);
      });

      it('renders correctly with "leading" equal to "shortest"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            leading="shortest"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--leading-shortest']);
      });

      it('renders correctly with "leading" equal to "short"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            leading="short"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--leading-short']);
      });

      it('renders correctly with "leading" equal to "normal"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            leading="normal"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--leading-normal']);
      });

      it('renders correctly with "leading" equal to "high"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            leading="high"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--leading-high']);
      });

      it('renders correctly with "leading" equal to "highest"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            leading="highest"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--leading-highest']);
      });

    });

    describe('the component should render with the correct "nowrap"', () => {

      it('renders correctly without "nowrap"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveClass(HeadingClasses['heading--nowrap']);
      });

      it('renders correctly with "nowrap" equal to "false"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            nowrap={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveClass(HeadingClasses['heading--nowrap']);
      });

      it('renders correctly with "nowrap" equal to "true"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            nowrap={true}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--nowrap']);
      });

    });

    describe('the component should render with the correct "ellipsis"', () => {

      it('renders correctly without "ellipsis"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveClass(HeadingClasses['heading--ellipsis']);
      });

      it('renders correctly with "ellipsis" equal to "false"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            ellipsis={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveClass(HeadingClasses['heading--ellipsis']);
      });

      it('renders correctly with "ellipsis" equal to "true"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            ellipsis={true}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--ellipsis']);
      });

    });

    describe('the component should render with the correct "monospaced"', () => {

      it('renders correctly without "monospaced"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveClass(HeadingClasses['heading--monospaced']);
      });

      it('renders correctly with "monospaced" equal to "false"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            monospaced={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveClass(HeadingClasses['heading--monospaced']);
      });

      it('renders correctly with "monospaced" equal to "true"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            monospaced={true}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveClass(HeadingClasses['heading--monospaced']);
      });

    });

    describe('the component should render with the correct "maxLines"', () => {

      it('renders correctly without "maxLines"', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveStyle(`WebkitLineClamp: ${3};`);
      });

      it('renders correctly with "maxLines"', () => {
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            maxLines={3}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveStyle(`WebkitLineClamp: ${3};`);
      });

    });

  });

  describe('event handling', () => {

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(HEADING_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(HEADING_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(HEADING_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(HEADING_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(HEADING_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(HEADING_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(HEADING_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(HEADING_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(HEADING_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(HEADING_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(HEADING_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveRole('heading');
      });

      it('renders correctly with accessible role', () => {
        const role: HeadingProps['role'] = 'none';
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            role={role}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <Heading data-testid={HEADING_TEST_ID} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name', () => {
        const ariaLabel: HeadingProps['aria-label'] = 'auth-layout-description';
        render(
          <Heading
            data-testid={HEADING_TEST_ID}
            aria-label={ariaLabel}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(HEADING_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(HEADING_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

    });

  });

});