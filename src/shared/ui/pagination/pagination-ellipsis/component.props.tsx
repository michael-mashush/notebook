import {
  type ComponentPropsWithoutRef
} from 'react';

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {}

export default Props;