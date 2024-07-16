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
  List,
  ListClasses,
  ListProps
} from 'shared/ui';

import {
  RENDER_OPTIONS
} from 'tests/config';

import {
  v4
} from 'uuid';

const LIST_TEST_ID = 'list';

describe('shared/ui/list/list:', () => {

  describe('The component successfully processes all properties', () => {

    describe('Default attributes', () => {

      describe('className', () => {

        const values: Exclude<ListProps['className'], undefined>[] = [
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`
        ] as const;

        for (const value of values) {
          test(`"className" is equal to "${value}"`, () => {
            const component = (
              <List
                data-testid={LIST_TEST_ID}
                className={value}
              />
            );

            render(component, RENDER_OPTIONS);
            expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(LIST_TEST_ID)).toHaveClass(value);
          });
        }

      });

    });

    describe('Special properties', () => {

      describe('children', () => {

        const values: Exclude<ListProps['children'], undefined>[] = [
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`,
          `${v4()}`
        ] as const;

        for (const value of values) {
          test(`"children" is equal to "${value}"`, () => {
            const component = (
              <List
                data-testid={LIST_TEST_ID}
                children={value}
              />
            );

            render(component, RENDER_OPTIONS);
            expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(LIST_TEST_ID)).toHaveTextContent(String(value));
          });
        }

      });

      describe('direction', () => {

        const values: Exclude<ListProps['direction'], undefined>[] = [
          'column',
          'column-reverse',
          'row',
          'row-reverse'
        ] as const;

        for (const value of values) {
          test(`"direction" is equal to "${value}"`, () => {
            const component = (
              <List
                data-testid={LIST_TEST_ID}
                direction={value}
              />
            );

            render(component, RENDER_OPTIONS);
            expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(LIST_TEST_ID)).toHaveClass(ListClasses[`list--direction-${value}`]);
          });
        }

      });

      describe('justify', () => {

        const values: Exclude<ListProps['justify'], undefined>[] = [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
          'space-evenly'
        ] as const;

        for (const value of values) {
          test(`"justify" is equal to "${value}"`, () => {
            const component = (
              <List
                data-testid={LIST_TEST_ID}
                justify={value}
              />
            );

            render(component, RENDER_OPTIONS);
            expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(LIST_TEST_ID)).toHaveClass(ListClasses[`list--justify-${value}`]);
          });
        }

      });

      describe('align', () => {

        const values: Exclude<ListProps['align'], undefined>[] = [
          'start',
          'center',
          'end',
          'baseline',
          'first-baseline',
          'last-baseline'
        ] as const;

        for (const value of values) {
          test(`"align" is equal to "${value}"`, () => {
            const component = (
              <List
                data-testid={LIST_TEST_ID}
                align={value}
              />
            );

            render(component, RENDER_OPTIONS);
            expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(LIST_TEST_ID)).toHaveClass(ListClasses[`list--align-${value}`]);
          });
        }

      });

      describe('gap', () => {

        const values: Exclude<ListProps['gap'], undefined>[] = [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
          '10xl',
          '11xl',
          '12xl'
        ] as const;

        for (const value of values) {
          test(`"gap" is equal to "${value}"`, () => {
            const component = (
              <List
                data-testid={LIST_TEST_ID}
                gap={value}
              />
            );

            render(component, RENDER_OPTIONS);
            expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(LIST_TEST_ID)).toHaveClass(ListClasses[`list--gap-${value}`]);
          });
        }

      });

    });

    describe('Event attributes', () => {

      test('onContextMenu', () => {
        const handleContextMenu        = vitest.fn();
        const handleContextMenuCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onContextMenu={handleContextMenu}
            onContextMenuCapture={handleContextMenuCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleContextMenu).not.toHaveBeenCalled();
        expect(handleContextMenu).not.toHaveBeenCalledOnce();
        expect(handleContextMenuCapture).not.toHaveBeenCalled();
        expect(handleContextMenuCapture).not.toHaveBeenCalledOnce();

        fireEvent.contextMenu(screen.getByTestId(LIST_TEST_ID));

        expect(handleContextMenu).toHaveBeenCalled();
        expect(handleContextMenu).toHaveBeenCalledOnce();
        expect(handleContextMenuCapture).toHaveBeenCalled();
        expect(handleContextMenuCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onKeyDown', () => {
        const handleKeyDown        = vitest.fn();
        const handleKeyDownCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onKeyDown={handleKeyDown}
            onKeyDownCapture={handleKeyDownCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleKeyDown).not.toHaveBeenCalled();
        expect(handleKeyDown).not.toHaveBeenCalledOnce();
        expect(handleKeyDownCapture).not.toHaveBeenCalled();
        expect(handleKeyDownCapture).not.toHaveBeenCalledOnce();

        fireEvent.keyDown(screen.getByTestId(LIST_TEST_ID));

        expect(handleKeyDown).toHaveBeenCalled();
        expect(handleKeyDown).toHaveBeenCalledOnce();
        expect(handleKeyDownCapture).toHaveBeenCalled();
        expect(handleKeyDownCapture).toHaveBeenCalledOnce();
      });

      test('onKeyUp', () => {
        const handleKeyUp        = vitest.fn();
        const handleKeyUpCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onKeyUp={handleKeyUp}
            onKeyUpCapture={handleKeyUpCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleKeyUp).not.toHaveBeenCalled();
        expect(handleKeyUp).not.toHaveBeenCalledOnce();
        expect(handleKeyUpCapture).not.toHaveBeenCalled();
        expect(handleKeyUpCapture).not.toHaveBeenCalledOnce();

        fireEvent.keyUp(screen.getByTestId(LIST_TEST_ID));

        expect(handleKeyUp).toHaveBeenCalled();
        expect(handleKeyUp).toHaveBeenCalledOnce();
        expect(handleKeyUpCapture).toHaveBeenCalled();
        expect(handleKeyUpCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onClick', () => {
        const handleClick        = vitest.fn();
        const handleClickCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onClick={handleClick}
            onClickCapture={handleClickCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleClick).not.toHaveBeenCalled();
        expect(handleClick).not.toHaveBeenCalledOnce();
        expect(handleClickCapture).not.toHaveBeenCalled();
        expect(handleClickCapture).not.toHaveBeenCalledOnce();

        fireEvent.click(screen.getByTestId(LIST_TEST_ID));

        expect(handleClick).toHaveBeenCalled();
        expect(handleClick).toHaveBeenCalledOnce();
        expect(handleClickCapture).toHaveBeenCalled();
        expect(handleClickCapture).toHaveBeenCalledOnce();
      });

      test('onDoubleClick', () => {
        const handleDoubleClick        = vitest.fn();
        const handleDoubleClickCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDoubleClick={handleDoubleClick}
            onDoubleClickCapture={handleDoubleClickCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDoubleClick).not.toHaveBeenCalled();
        expect(handleDoubleClick).not.toHaveBeenCalledOnce();
        expect(handleDoubleClickCapture).not.toHaveBeenCalled();
        expect(handleDoubleClickCapture).not.toHaveBeenCalledOnce();

        fireEvent.doubleClick(screen.getByTestId(LIST_TEST_ID));

        expect(handleDoubleClick).toHaveBeenCalled();
        expect(handleDoubleClick).toHaveBeenCalledOnce();
        expect(handleDoubleClickCapture).toHaveBeenCalled();
        expect(handleDoubleClickCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onMouseDown', () => {
        const handleMouseDown        = vitest.fn();
        const handleMouseDownCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseDown={handleMouseDown}
            onMouseDownCapture={handleMouseDownCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseDown).not.toHaveBeenCalled();
        expect(handleMouseDown).not.toHaveBeenCalledOnce();
        expect(handleMouseDownCapture).not.toHaveBeenCalled();
        expect(handleMouseDownCapture).not.toHaveBeenCalledOnce();

        fireEvent.mouseDown(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseDown).toHaveBeenCalled();
        expect(handleMouseDown).toHaveBeenCalledOnce();
        expect(handleMouseDownCapture).toHaveBeenCalled();
        expect(handleMouseDownCapture).toHaveBeenCalledOnce();
      });

      test('onMouseEnter', () => {
        const handleMouseEnter = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseEnter={handleMouseEnter}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseEnter).not.toHaveBeenCalled();
        expect(handleMouseEnter).not.toHaveBeenCalledOnce();

        fireEvent.mouseEnter(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseEnter).toHaveBeenCalled();
        expect(handleMouseEnter).toHaveBeenCalledOnce();
      });

      test('onMouseLeave', () => {
        const handleMouseLeave = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseLeave={handleMouseLeave}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseLeave).not.toHaveBeenCalled();
        expect(handleMouseLeave).not.toHaveBeenCalledOnce();

        fireEvent.mouseLeave(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseLeave).toHaveBeenCalled();
        expect(handleMouseLeave).toHaveBeenCalledOnce();
      });

      test('onMouseMove', () => {
        const handleMouseMove        = vitest.fn();
        const handleMouseMoveCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseMove={handleMouseMove}
            onMouseMoveCapture={handleMouseMoveCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseMove).not.toHaveBeenCalled();
        expect(handleMouseMove).not.toHaveBeenCalledOnce();
        expect(handleMouseMoveCapture).not.toHaveBeenCalled();
        expect(handleMouseMoveCapture).not.toHaveBeenCalledOnce();

        fireEvent.mouseMove(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseMove).toHaveBeenCalled();
        expect(handleMouseMove).toHaveBeenCalledOnce();
        expect(handleMouseMoveCapture).toHaveBeenCalled();
        expect(handleMouseMoveCapture).toHaveBeenCalledOnce();
      });

      test('onMouseOut', () => {
        const handleMouseOut        = vitest.fn();
        const handleMouseOutCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseOut={handleMouseOut}
            onMouseOutCapture={handleMouseOutCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseOut).not.toHaveBeenCalled();
        expect(handleMouseOut).not.toHaveBeenCalledOnce();
        expect(handleMouseOutCapture).not.toHaveBeenCalled();
        expect(handleMouseOutCapture).not.toHaveBeenCalledOnce();

        fireEvent.mouseOut(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseOut).toHaveBeenCalled();
        expect(handleMouseOut).toHaveBeenCalledOnce();
        expect(handleMouseOutCapture).toHaveBeenCalled();
        expect(handleMouseOutCapture).toHaveBeenCalledOnce();
      });

      test('onMouseOver', () => {
        const handleMouseOver        = vitest.fn();
        const handleMouseOverCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseOver={handleMouseOver}
            onMouseOverCapture={handleMouseOverCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseOver).not.toHaveBeenCalled();
        expect(handleMouseOver).not.toHaveBeenCalledOnce();
        expect(handleMouseOverCapture).not.toHaveBeenCalled();
        expect(handleMouseOverCapture).not.toHaveBeenCalledOnce();

        fireEvent.mouseOver(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseOver).toHaveBeenCalled();
        expect(handleMouseOver).toHaveBeenCalledOnce();
        expect(handleMouseOverCapture).toHaveBeenCalled();
        expect(handleMouseOverCapture).toHaveBeenCalledOnce();
      });

      test('onMouseUp', () => {
        const handleMouseUp        = vitest.fn();
        const handleMouseUpCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onMouseUp={handleMouseUp}
            onMouseUpCapture={handleMouseUpCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleMouseUp).not.toHaveBeenCalled();
        expect(handleMouseUp).not.toHaveBeenCalledOnce();
        expect(handleMouseUpCapture).not.toHaveBeenCalled();
        expect(handleMouseUpCapture).not.toHaveBeenCalledOnce();

        fireEvent.mouseUp(screen.getByTestId(LIST_TEST_ID));

        expect(handleMouseUp).toHaveBeenCalled();
        expect(handleMouseUp).toHaveBeenCalledOnce();
        expect(handleMouseUpCapture).toHaveBeenCalled();
        expect(handleMouseUpCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onPointerCancel', () => {
        const handlePointerCancel        = vitest.fn();
        const handlePointerCancelCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerCancel={handlePointerCancel}
            onPointerCancelCapture={handlePointerCancelCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerCancel).not.toHaveBeenCalled();
        expect(handlePointerCancel).not.toHaveBeenCalledOnce();
        expect(handlePointerCancelCapture).not.toHaveBeenCalled();
        expect(handlePointerCancelCapture).not.toHaveBeenCalledOnce();

        fireEvent.pointerCancel(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerCancel).toHaveBeenCalled();
        expect(handlePointerCancel).toHaveBeenCalledOnce();
        expect(handlePointerCancelCapture).toHaveBeenCalled();
        expect(handlePointerCancelCapture).toHaveBeenCalledOnce();
      });

      test('onPointerDown', () => {
        const handlePointerDown        = vitest.fn();
        const handlePointerDownCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerDown={handlePointerDown}
            onPointerDownCapture={handlePointerDownCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerDown).not.toHaveBeenCalled();
        expect(handlePointerDown).not.toHaveBeenCalledOnce();
        expect(handlePointerDownCapture).not.toHaveBeenCalled();
        expect(handlePointerDownCapture).not.toHaveBeenCalledOnce();

        fireEvent.pointerDown(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerDown).toHaveBeenCalled();
        expect(handlePointerDown).toHaveBeenCalledOnce();
        expect(handlePointerDownCapture).toHaveBeenCalled();
        expect(handlePointerDownCapture).toHaveBeenCalledOnce();
      });

      test('onPointerEnter', () => {
        const handlePointerEnter = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerEnter={handlePointerEnter}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerEnter).not.toHaveBeenCalled();
        expect(handlePointerEnter).not.toHaveBeenCalledOnce();

        fireEvent.pointerEnter(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerEnter).toHaveBeenCalled();
        expect(handlePointerEnter).toHaveBeenCalledOnce();
      });

      test('onPointerLeave', () => {
        const handlePointerLeave = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerLeave={handlePointerLeave}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerLeave).not.toHaveBeenCalled();
        expect(handlePointerLeave).not.toHaveBeenCalledOnce();

        fireEvent.pointerLeave(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerLeave).toHaveBeenCalled();
        expect(handlePointerLeave).toHaveBeenCalledOnce();
      });

      test('onPointerMove', () => {
        const handlePointerMove        = vitest.fn();
        const handlePointerMoveCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerMove={handlePointerMove}
            onPointerMoveCapture={handlePointerMoveCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerMove).not.toHaveBeenCalled();
        expect(handlePointerMove).not.toHaveBeenCalledOnce();
        expect(handlePointerMoveCapture).not.toHaveBeenCalled();
        expect(handlePointerMoveCapture).not.toHaveBeenCalledOnce();

        fireEvent.pointerMove(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerMove).toHaveBeenCalled();
        expect(handlePointerMove).toHaveBeenCalledOnce();
        expect(handlePointerMoveCapture).toHaveBeenCalled();
        expect(handlePointerMoveCapture).toHaveBeenCalledOnce();
      });

      test('onPointerOut', () => {
        const handlePointerOut        = vitest.fn();
        const handlePointerOutCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerOut={handlePointerOut}
            onPointerOutCapture={handlePointerOutCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerOut).not.toHaveBeenCalled();
        expect(handlePointerOut).not.toHaveBeenCalledOnce();
        expect(handlePointerOutCapture).not.toHaveBeenCalled();
        expect(handlePointerOutCapture).not.toHaveBeenCalledOnce();

        fireEvent.pointerOut(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerOut).toHaveBeenCalled();
        expect(handlePointerOut).toHaveBeenCalledOnce();
        expect(handlePointerOutCapture).toHaveBeenCalled();
        expect(handlePointerOutCapture).toHaveBeenCalledOnce();
      });

      test('onPointerOver', () => {
        const handlePointerOver        = vitest.fn();
        const handlePointerOverCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerOver={handlePointerOver}
            onPointerOverCapture={handlePointerOverCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerOver).not.toHaveBeenCalled();
        expect(handlePointerOver).not.toHaveBeenCalledOnce();
        expect(handlePointerOverCapture).not.toHaveBeenCalled();
        expect(handlePointerOverCapture).not.toHaveBeenCalledOnce();

        fireEvent.pointerOver(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerOver).toHaveBeenCalled();
        expect(handlePointerOver).toHaveBeenCalledOnce();
        expect(handlePointerOverCapture).toHaveBeenCalled();
        expect(handlePointerOverCapture).toHaveBeenCalledOnce();
      });

      test('onPointerUp', () => {
        const handlePointerUp        = vitest.fn();
        const handlePointerUpCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onPointerUp={handlePointerUp}
            onPointerUpCapture={handlePointerUpCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handlePointerUp).not.toHaveBeenCalled();
        expect(handlePointerUp).not.toHaveBeenCalledOnce();
        expect(handlePointerUpCapture).not.toHaveBeenCalled();
        expect(handlePointerUpCapture).not.toHaveBeenCalledOnce();

        fireEvent.pointerUp(screen.getByTestId(LIST_TEST_ID));

        expect(handlePointerUp).toHaveBeenCalled();
        expect(handlePointerUp).toHaveBeenCalledOnce();
        expect(handlePointerUpCapture).toHaveBeenCalled();
        expect(handlePointerUpCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onTouchCancel', () => {
        const handleTouchCancel        = vitest.fn();
        const handleTouchCancelCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onTouchCancel={handleTouchCancel}
            onTouchCancelCapture={handleTouchCancelCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleTouchCancel).not.toHaveBeenCalled();
        expect(handleTouchCancel).not.toHaveBeenCalledOnce();
        expect(handleTouchCancelCapture).not.toHaveBeenCalled();
        expect(handleTouchCancelCapture).not.toHaveBeenCalledOnce();

        fireEvent.touchCancel(screen.getByTestId(LIST_TEST_ID));

        expect(handleTouchCancel).toHaveBeenCalled();
        expect(handleTouchCancel).toHaveBeenCalledOnce();
        expect(handleTouchCancelCapture).toHaveBeenCalled();
        expect(handleTouchCancelCapture).toHaveBeenCalledOnce();
      });

      test('onTouchEnd', () => {
        const handleTouchEnd        = vitest.fn();
        const handleTouchEndCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onTouchEnd={handleTouchEnd}
            onTouchEndCapture={handleTouchEndCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleTouchEnd).not.toHaveBeenCalled();
        expect(handleTouchEnd).not.toHaveBeenCalledOnce();
        expect(handleTouchEndCapture).not.toHaveBeenCalled();
        expect(handleTouchEndCapture).not.toHaveBeenCalledOnce();

        fireEvent.touchEnd(screen.getByTestId(LIST_TEST_ID));

        expect(handleTouchEnd).toHaveBeenCalled();
        expect(handleTouchEnd).toHaveBeenCalledOnce();
        expect(handleTouchEndCapture).toHaveBeenCalled();
        expect(handleTouchEndCapture).toHaveBeenCalledOnce();
      });

      test('onTouchMove', () => {
        const handleTouchMove        = vitest.fn();
        const handleTouchMoveCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onTouchMove={handleTouchMove}
            onTouchMoveCapture={handleTouchMoveCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleTouchMove).not.toHaveBeenCalled();
        expect(handleTouchMove).not.toHaveBeenCalledOnce();
        expect(handleTouchMoveCapture).not.toHaveBeenCalled();
        expect(handleTouchMoveCapture).not.toHaveBeenCalledOnce();

        fireEvent.touchMove(screen.getByTestId(LIST_TEST_ID));

        expect(handleTouchMove).toHaveBeenCalled();
        expect(handleTouchMove).toHaveBeenCalledOnce();
        expect(handleTouchMoveCapture).toHaveBeenCalled();
        expect(handleTouchMoveCapture).toHaveBeenCalledOnce();
      });

      test('onTouchStart', () => {
        const handleTouchStart        = vitest.fn();
        const handleTouchStartCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onTouchStart={handleTouchStart}
            onTouchStartCapture={handleTouchStartCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleTouchStart).not.toHaveBeenCalled();
        expect(handleTouchStart).not.toHaveBeenCalledOnce();
        expect(handleTouchStartCapture).not.toHaveBeenCalled();
        expect(handleTouchStartCapture).not.toHaveBeenCalledOnce();

        fireEvent.touchStart(screen.getByTestId(LIST_TEST_ID));

        expect(handleTouchStart).toHaveBeenCalled();
        expect(handleTouchStart).toHaveBeenCalledOnce();
        expect(handleTouchStartCapture).toHaveBeenCalled();
        expect(handleTouchStartCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onWheel', () => {
        const handleWheel        = vitest.fn();
        const handleWheelCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onWheel={handleWheel}
            onWheelCapture={handleWheelCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleWheel).not.toHaveBeenCalled();
        expect(handleWheel).not.toHaveBeenCalledOnce();
        expect(handleWheelCapture).not.toHaveBeenCalled();
        expect(handleWheelCapture).not.toHaveBeenCalledOnce();

        fireEvent.wheel(screen.getByTestId(LIST_TEST_ID));

        expect(handleWheel).toHaveBeenCalled();
        expect(handleWheel).toHaveBeenCalledOnce();
        expect(handleWheelCapture).toHaveBeenCalled();
        expect(handleWheelCapture).toHaveBeenCalledOnce();
      });

      test('onScroll', () => {
        const handleScroll        = vitest.fn();
        const handleScrollCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onScroll={handleScroll}
            onScrollCapture={handleScrollCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleScroll).not.toHaveBeenCalled();
        expect(handleScroll).not.toHaveBeenCalledOnce();
        expect(handleScrollCapture).not.toHaveBeenCalled();
        expect(handleScrollCapture).not.toHaveBeenCalledOnce();

        fireEvent.scroll(screen.getByTestId(LIST_TEST_ID));

        expect(handleScroll).toHaveBeenCalled();
        expect(handleScroll).toHaveBeenCalledOnce();
        expect(handleScrollCapture).toHaveBeenCalled();
        expect(handleScrollCapture).toHaveBeenCalledOnce();
      });

      // ==================================================

      test('onDrag', () => {
        const handleDrag        = vitest.fn();
        const handleDragCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDrag={handleDrag}
            onDragCapture={handleDragCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDrag).not.toHaveBeenCalled();
        expect(handleDrag).not.toHaveBeenCalledOnce();
        expect(handleDragCapture).not.toHaveBeenCalled();
        expect(handleDragCapture).not.toHaveBeenCalledOnce();

        fireEvent.drag(screen.getByTestId(LIST_TEST_ID));

        expect(handleDrag).toHaveBeenCalled();
        expect(handleDrag).toHaveBeenCalledOnce();
        expect(handleDragCapture).toHaveBeenCalled();
        expect(handleDragCapture).toHaveBeenCalledOnce();
      });

      test('onDragEnd', () => {
        const handleDragEnd        = vitest.fn();
        const handleDragEndCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDragEnd={handleDragEnd}
            onDragEndCapture={handleDragEndCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDragEnd).not.toHaveBeenCalled();
        expect(handleDragEnd).not.toHaveBeenCalledOnce();
        expect(handleDragEndCapture).not.toHaveBeenCalled();
        expect(handleDragEndCapture).not.toHaveBeenCalledOnce();

        fireEvent.dragEnd(screen.getByTestId(LIST_TEST_ID));

        expect(handleDragEnd).toHaveBeenCalled();
        expect(handleDragEnd).toHaveBeenCalledOnce();
        expect(handleDragEndCapture).toHaveBeenCalled();
        expect(handleDragEndCapture).toHaveBeenCalledOnce();
      });

      test('onDragEnter', () => {
        const handleDragEnter        = vitest.fn();
        const handleDragEnterCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDragEnter={handleDragEnter}
            onDragEnterCapture={handleDragEnterCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDragEnter).not.toHaveBeenCalled();
        expect(handleDragEnter).not.toHaveBeenCalledOnce();
        expect(handleDragEnterCapture).not.toHaveBeenCalled();
        expect(handleDragEnterCapture).not.toHaveBeenCalledOnce();

        fireEvent.dragEnter(screen.getByTestId(LIST_TEST_ID));

        expect(handleDragEnter).toHaveBeenCalled();
        expect(handleDragEnter).toHaveBeenCalledOnce();
        expect(handleDragEnterCapture).toHaveBeenCalled();
        expect(handleDragEnterCapture).toHaveBeenCalledOnce();
      });

      test('onDragLeave', () => {
        const handleDragLeave        = vitest.fn();
        const handleDragLeaveCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDragLeave={handleDragLeave}
            onDragLeaveCapture={handleDragLeaveCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDragLeave).not.toHaveBeenCalled();
        expect(handleDragLeave).not.toHaveBeenCalledOnce();
        expect(handleDragLeaveCapture).not.toHaveBeenCalled();
        expect(handleDragLeaveCapture).not.toHaveBeenCalledOnce();

        fireEvent.dragLeave(screen.getByTestId(LIST_TEST_ID));

        expect(handleDragLeave).toHaveBeenCalled();
        expect(handleDragLeave).toHaveBeenCalledOnce();
        expect(handleDragLeaveCapture).toHaveBeenCalled();
        expect(handleDragLeaveCapture).toHaveBeenCalledOnce();
      });

      test('onDragOver', () => {
        const handleDragOver        = vitest.fn();
        const handleDragOverCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDragOver={handleDragOver}
            onDragOverCapture={handleDragOverCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDragOver).not.toHaveBeenCalled();
        expect(handleDragOver).not.toHaveBeenCalledOnce();
        expect(handleDragOverCapture).not.toHaveBeenCalled();
        expect(handleDragOverCapture).not.toHaveBeenCalledOnce();

        fireEvent.dragOver(screen.getByTestId(LIST_TEST_ID));

        expect(handleDragOver).toHaveBeenCalled();
        expect(handleDragOver).toHaveBeenCalledOnce();
        expect(handleDragOverCapture).toHaveBeenCalled();
        expect(handleDragOverCapture).toHaveBeenCalledOnce();
      });

      test('onDragStart', () => {
        const handleDragStart        = vitest.fn();
        const handleDragStartCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDragStart={handleDragStart}
            onDragStartCapture={handleDragStartCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDragStart).not.toHaveBeenCalled();
        expect(handleDragStart).not.toHaveBeenCalledOnce();
        expect(handleDragStartCapture).not.toHaveBeenCalled();
        expect(handleDragStartCapture).not.toHaveBeenCalledOnce();

        fireEvent.dragStart(screen.getByTestId(LIST_TEST_ID));

        expect(handleDragStart).toHaveBeenCalled();
        expect(handleDragStart).toHaveBeenCalledOnce();
        expect(handleDragStartCapture).toHaveBeenCalled();
        expect(handleDragStartCapture).toHaveBeenCalledOnce();
      });

      test('onDrop', () => {
        const handleDrop        = vitest.fn();
        const handleDropCapture = vitest.fn();

        const component = (
          <List
            data-testid={LIST_TEST_ID}
            onDrop={handleDrop}
            onDropCapture={handleDropCapture}
          />
        );

        render(component, RENDER_OPTIONS);

        expect(handleDrop).not.toHaveBeenCalled();
        expect(handleDrop).not.toHaveBeenCalledOnce();
        expect(handleDropCapture).not.toHaveBeenCalled();
        expect(handleDropCapture).not.toHaveBeenCalledOnce();

        fireEvent.drop(screen.getByTestId(LIST_TEST_ID));

        expect(handleDrop).toHaveBeenCalled();
        expect(handleDrop).toHaveBeenCalledOnce();
        expect(handleDropCapture).toHaveBeenCalled();
        expect(handleDropCapture).toHaveBeenCalledOnce();
      });

    });

  });

});