import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  Paragraph
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const SettingsFieldDescription: ForwardRefRenderFunction<HTMLParagraphElement, Props> = (props, ref) => {

  const {
    children,
    className,
    color = 'muted',
    ...otherProps
  } = props;

  return (
    <Paragraph ref={ref} className={clsx(className, classes['settings-field-description'])} color={color} {...otherProps}>
      {children}
    </Paragraph>
  );

};

export default forwardRef(SettingsFieldDescription);