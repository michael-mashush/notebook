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
  ButtonLink,
  ButtonClasses,
  ButtonLinkProps
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const BUTTON_LINK_TEST_ID = v4();

describe('shared/ui/button-link', () => {

  describe('properties', () => {

    describe('the component should render with the correct "children"', () => {

      it('renders correctly without "children"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "children"', () => {
        const textContent = 'button text';
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            children={textContent}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveTextContent(textContent);
      });

    });

    describe('the component should render with the correct "className"', () => {

      it('renders correctly without "className"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button']);
      });

      it('renders correctly with single "className"', () => {
        const className1 = v4();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            className={className1}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button'], className1);
      });

      it('renders correctly with multiple "className"', () => {
        const className1 = v4();
        const className2 = v4();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            className={`${className1} ${className2}`}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button'], className1, className2);
      });

    });

    describe('the component should render with the correct "endIcon"', () => {

      it('renders correctly without "endIcon"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "endIcon"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            endIcon={StarIcon}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID).querySelector('svg')).toHaveClass('lucide-star');
      });

    });

    describe('the component should render with the correct "fullWidth"', () => {

      it('renders correctly without "fullWidth"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveClass(ButtonClasses['button--full-width']);
      });

      it('renders correctly with "fullWidth" equal to "false"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            fullWidth={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveClass(ButtonClasses['button--full-width']);

      });

      it('renders correctly with "fullWidth" equal to "true"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            fullWidth={true}
          />,
          RENDER_OPTIONS
        );
        screen.debug();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--full-width']);
      });

    });

    describe('the component should render with the correct "justify"', () => {

      it('renders correctly with default "justify"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--justify-center']);
      });

      it('renders correctly with "justify" equal to "start"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            justify="start"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--justify-start']);
      });

      it('renders correctly with "justify" equal to "center"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            justify="center"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--justify-center']);
      });

      it('renders correctly with "justify" equal to "end"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            justify="end"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--justify-end']);
      });

    });

    describe('the component should render with the correct "onlyIcon"', () => {

      it('renders correctly with default "onlyIcon"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveClass(ButtonClasses['button--only-icon']);
      });

      it('renders correctly with "onlyIcon" equal to "false"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onlyIcon={false}
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveClass(ButtonClasses['button--only-icon']);

      });

      it('renders correctly with "onlyIcon" equal to "true"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onlyIcon={true}
          />,
          RENDER_OPTIONS
        );
        screen.debug();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--only-icon']);
      });

    });

    describe('the component should render with the correct "referrerPolicy"', () => {

      it('renders correctly without "referrerPolicy"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveAttribute('referrerPolicy');
      });

      it('renders correctly with "referrerPolicy" equal to "no-referrer"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="no-referrer"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'no-referrer');
      });

      it('renders correctly with "referrerPolicy" equal to "no-referrer-when-downgrade"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="no-referrer-when-downgrade"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'no-referrer-when-downgrade');
      });

      it('renders correctly with "referrerPolicy" equal to "origin"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'origin');
      });

      it('renders correctly with "referrerPolicy" equal to "origin-when-cross-origin"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="origin-when-cross-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'origin-when-cross-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "same-origin"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="same-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'same-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "strict-origin"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="strict-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'strict-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "strict-origin-when-cross-origin"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="strict-origin-when-cross-origin"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'strict-origin-when-cross-origin');
      });

      it('renders correctly with "referrerPolicy" equal to "unsafe-url"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            referrerPolicy="unsafe-url"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('referrerPolicy', 'unsafe-url');
      });

    });

    describe('the component should render with the correct "rel"', () => {

      it('renders correctly without "rel"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveAttribute('rel');
      });

      it('renders correctly with "rel" equal to "alternate"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="alternate"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'alternate');
      });

      it('renders correctly with "rel" equal to "author"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="author"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'author');
      });

      it('renders correctly with "rel" equal to "bookmark"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="bookmark"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'bookmark');
      });

      it('renders correctly with "rel" equal to "external"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="external"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'external');
      });

      it('renders correctly with "rel" equal to "help"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="help"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'help');
      });

      it('renders correctly with "rel" equal to "license"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="license"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'license');
      });

      it('renders correctly with "rel" equal to "next"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="next"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'next');
      });

      it('renders correctly with "rel" equal to "nofollow"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="nofollow"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'nofollow');
      });

      it('renders correctly with "rel" equal to "noreferrer"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="noreferrer"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'noreferrer');
      });

      it('renders correctly with "rel" equal to "noopener"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="noopener"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'noopener');
      });

      it('renders correctly with "rel" equal to "prev"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="prev"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'prev');
      });

      it('renders correctly with "rel" equal to "search"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="search"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'search');
      });

      it('renders correctly with "rel" equal to "tag"', () => {
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            rel="tag"
          />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('rel', 'tag');
      });

    });

    describe('the component should render with the correct "size"', () => {

      it('renders correctly with default "size"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--size-medium']);
      });

      it('renders correctly with "size" equal to "small"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" size="small" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--size-small']);
      });

      it('renders correctly with "size" equal to "medium"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" size="medium" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--size-medium']);
      });

      it('renders correctly with "size" equal to "large"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" size="large" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--size-large']);
      });

    });

    describe('the component should render with the correct "startIcon"', () => {

      it('renders correctly without "startIcon"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeEmptyDOMElement();
      });

      it('renders correctly with "startIcon"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" startIcon={InfoIcon} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toBeEmptyDOMElement();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID).querySelector('svg')).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID).querySelector('svg')).toHaveClass('lucide-info');
      });

    });

    describe('the component should render with the correct "target"', () => {

      it('renders correctly without "target"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveAttribute('target');
      });

      it('renders correctly with "target" equal to "_blank"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" target="_blank" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('target', '_blank');
      });

      it('renders correctly with "target" equal to "_parent"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" target="_parent" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('target', '_parent');
      });

      it('renders correctly with "target" equal to "_self"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" target="_self" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('target', '_self');
      });

      it('renders correctly with "target" equal to "_top"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" target="_top" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAttribute('target', '_top');
      });


    });

    describe('the component should render with the correct "variant"', () => {

      it('renders correctly with default "variant"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--variant-primary']);
      });

      it('renders correctly with "variant" equal to "primary"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" variant="primary" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--variant-primary']);
      });

      it('renders correctly with "variant" equal to "secondary"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" variant="secondary" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--variant-secondary']);
      });

      it('renders correctly with "variant" equal to "outlined"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" variant="outlined" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--variant-outlined']);
      });

      it('renders correctly with "variant" equal to "ghost"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" variant="ghost" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--variant-ghost']);
      });

      it('renders correctly with "variant" equal to "destructive"', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" variant="destructive" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveClass(ButtonClasses['button--variant-destructive']);
      });

    });

  });

  describe('event handling', () => {

    describe('form events', () => {

      it('the component should handle "blur" event', () => {
        const handleBlurDefault = vitest.fn();
        const handleBlurCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onBlur={handleBlurDefault}
            onBlurCapture={handleBlurCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleBlurDefault).not.toHaveBeenCalled();
        expect(handleBlurCapture).not.toHaveBeenCalled();
        fireEvent.blur(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleBlurDefault).toHaveBeenCalled();
        expect(handleBlurCapture).toHaveBeenCalled();
      });

      it('the component should handle "focus" event', () => {
        const handleFocusDefault = vitest.fn();
        const handleFocusCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onFocus={handleFocusDefault}
            onFocusCapture={handleFocusCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleFocusDefault).not.toHaveBeenCalled();
        expect(handleFocusCapture).not.toHaveBeenCalled();
        fireEvent.focus(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleFocusDefault).toHaveBeenCalled();
        expect(handleFocusCapture).toHaveBeenCalled();
      });

    });

    describe('keyboard events', () => {

      it('the component should handle "keydown" event', () => {
        const handleKeyDownDefault = vitest.fn();
        const handleKeyDownCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onKeyDown={handleKeyDownDefault}
            onKeyDownCapture={handleKeyDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyDownDefault).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        fireEvent.keyDown(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleKeyDownDefault).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "keyup" event', () => {
        const handleKeyUpDefault = vitest.fn();
        const handleKeyUpCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onKeyUp={handleKeyUpDefault}
            onKeyUpCapture={handleKeyUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleKeyUpDefault).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        fireEvent.keyUp(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleKeyUpDefault).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalled();
      });

    });

    describe('mouse events', () => {

      it('the component should handle "click" event', () => {
        const handleClickDefault = vitest.fn();
        const handleClickCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onClick={handleClickDefault}
            onClickCapture={handleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleClickDefault).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalled();
        fireEvent.click(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleClickDefault).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "doubleclick" event', () => {
        const handleDoubleClickDefault = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onDoubleClick={handleDoubleClickDefault}
            onDoubleClickCapture={handleDoubleClickCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleDoubleClickDefault).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        fireEvent.doubleClick(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleDoubleClickDefault).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
      });

      it('the component should handle "mousedown" event', () => {
        const handleMouseDownDefault = vitest.fn();
        const handleMouseDownCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseDown={handleMouseDownDefault}
            onMouseDownCapture={handleMouseDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseDownDefault).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        fireEvent.mouseDown(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseDownDefault).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseenter" event', () => {
        const handleMouseEnterDefault = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseEnter={handleMouseEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseEnterDefault).not.toHaveBeenCalled();
        fireEvent.mouseEnter(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "mouseleave" event', () => {
        const handleMouseLeaveDefault = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseLeave={handleMouseLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseLeaveDefault).not.toHaveBeenCalled();
        fireEvent.mouseLeave(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "mousemove" event', () => {
        const handleMouseMoveDefault = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseMove={handleMouseMoveDefault}
            onMouseMoveCapture={handleMouseMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseMoveDefault).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        fireEvent.mouseMove(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseMoveDefault).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseout" event', () => {
        const handleMouseOutDefault = vitest.fn();
        const handleMouseOutCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseOut={handleMouseOutDefault}
            onMouseOutCapture={handleMouseOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOutDefault).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        fireEvent.mouseOut(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseOutDefault).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseover" event', () => {
        const handleMouseOverDefault = vitest.fn();
        const handleMouseOverCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseOver={handleMouseOverDefault}
            onMouseOverCapture={handleMouseOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseOverDefault).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        fireEvent.mouseOver(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseOverDefault).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "mouseup" event', () => {
        const handleMouseUpDefault = vitest.fn();
        const handleMouseUpCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onMouseUp={handleMouseUpDefault}
            onMouseUpCapture={handleMouseUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleMouseUpDefault).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        fireEvent.mouseUp(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleMouseUpDefault).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalled();
      });

      it('the component should handle "wheel" event', () => {
        const handleWheelDefault = vitest.fn();
        const handleWheelCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onWheel={handleWheelDefault}
            onWheelCapture={handleWheelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleWheelDefault).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        fireEvent.wheel(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleWheelDefault).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalled();
      });

    });

    describe('touch events', () => {

      it('the component should handle "touchcancel" event', () => {
        const handleTouchCancelDefault = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onTouchCancel={handleTouchCancelDefault}
            onTouchCancelCapture={handleTouchCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchCancelDefault).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        fireEvent.touchCancel(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleTouchCancelDefault).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchend" event', () => {
        const handleTouchEndDefault = vitest.fn();
        const handleTouchEndCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onTouchEnd={handleTouchEndDefault}
            onTouchEndCapture={handleTouchEndCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchEndDefault).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        fireEvent.touchEnd(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleTouchEndDefault).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchmove" event', () => {
        const handleTouchMoveDefault = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onTouchMove={handleTouchMoveDefault}
            onTouchMoveCapture={handleTouchMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchMoveDefault).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        fireEvent.touchMove(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleTouchMoveDefault).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "touchstart" event', () => {
        const handleTouchStartDefault = vitest.fn();
        const handleTouchStartCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onTouchStart={handleTouchStartDefault}
            onTouchStartCapture={handleTouchStartCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handleTouchStartDefault).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        fireEvent.touchStart(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handleTouchStartDefault).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalled();
      });

    });

    describe('pointer events', () => {

      it('the component should handle "pointercancel" event', () => {
        const handlePointerCancelDefault = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerCancel={handlePointerCancelDefault}
            onPointerCancelCapture={handlePointerCancelCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerCancelDefault).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        fireEvent.pointerCancel(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerCancelDefault).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerdown" event', () => {
        const handlePointerDownDefault = vitest.fn();
        const handlePointerDownCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerDown={handlePointerDownDefault}
            onPointerDownCapture={handlePointerDownCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerDownDefault).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        fireEvent.pointerDown(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerDownDefault).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerenter" event', () => {
        const handlePointerEnterDefault = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerEnter={handlePointerEnterDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerEnterDefault).not.toHaveBeenCalled();
        fireEvent.pointerEnter(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerEnterDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointerleave" event', () => {
        const handlePointerLeaveDefault = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerLeave={handlePointerLeaveDefault}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerLeaveDefault).not.toHaveBeenCalled();
        fireEvent.pointerLeave(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerLeaveDefault).toHaveBeenCalled();
      });

      it('the component should handle "pointermove" event', () => {
        const handlePointerMoveDefault = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerMove={handlePointerMoveDefault}
            onPointerMoveCapture={handlePointerMoveCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerMoveDefault).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerMoveDefault).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerout" event', () => {
        const handlePointerOutDefault = vitest.fn();
        const handlePointerOutCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerOut={handlePointerOutDefault}
            onPointerOutCapture={handlePointerOutCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOutDefault).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        fireEvent.pointerOut(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerOutDefault).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerover" event', () => {
        const handlePointerOverDefault = vitest.fn();
        const handlePointerOverCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerOver={handlePointerOverDefault}
            onPointerOverCapture={handlePointerOverCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerOverDefault).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        fireEvent.pointerOver(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerOverDefault).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalled();
      });

      it('the component should handle "pointerup" event', () => {
        const handlePointerUpDefault = vitest.fn();
        const handlePointerUpCapture = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
            href="/"
            onPointerUp={handlePointerUpDefault}
            onPointerUpCapture={handlePointerUpCapture}
          />,
          RENDER_OPTIONS
        );
        expect(handlePointerUpDefault).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        fireEvent.pointerUp(screen.getByTestId(BUTTON_LINK_TEST_ID));
        expect(handlePointerUpDefault).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalled();
      });

    });

  });

  describe('accessibility', () => {

    describe('the component should render with the correct accessible role', () => {

      it('renders correctly with default accessible role', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveRole('link');
      });

      it('renders correctly with accessible role', () => {
        const role: ButtonLinkProps['role'] = 'none';
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" role={role} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveRole(role);
      });

    });

    describe('the component should render with the correct accessible name', () => {

      it('renders correctly without accessible name', () => {
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).not.toHaveAccessibleName();
      });

      it('renders correctly with accessible name (attribute)', () => {
        const ariaLabel: ButtonLinkProps['aria-label'] = 'anchor';
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" aria-label={ariaLabel} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAccessibleName(ariaLabel);
      });

      it('renders correctly with accessible name (children)', () => {
        const children: ButtonLinkProps['children'] = 'anchor';
        render(
          <ButtonLink data-testid={BUTTON_LINK_TEST_ID} href="/" children={children} />,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(BUTTON_LINK_TEST_ID)).toHaveAccessibleName(children);
      });

    });

    describe('the component should support keyboard control', () => {

      it('correctly handles focus using the keyboard', async () => {
        const handleFocus = vitest.fn();
        const handleBlur  = vitest.fn();
        render(
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
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
          <ButtonLink
            data-testid={BUTTON_LINK_TEST_ID}
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