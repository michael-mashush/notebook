import {
  render,
  screen
} from '@testing-library/react';

import {
  Popover,
  PopoverTrigger
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const CARD_CONTENT_TEST_ID = v4();

describe('shared/ui/popover/popover-trigger', () => {

  describe('properties', () => {

    describe('the component should render with the correct "children"', () => {

      it('renders correctly with "children"', () => {
        const children = v4();
        render(
          <Popover>
            <PopoverTrigger>
              <button data-testid={CARD_CONTENT_TEST_ID}>
                {children}
              </button>
            </PopoverTrigger>
          </Popover>,
          RENDER_OPTIONS
        );
        expect(screen.getByTestId(CARD_CONTENT_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(CARD_CONTENT_TEST_ID)).toHaveTextContent(children);
      });

    });

  });

});