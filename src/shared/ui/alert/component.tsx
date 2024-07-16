import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  AlertCircleIcon
} from 'lucide-react';

import {
  clsx
} from 'clsx';

import {
  Icon,
  Heading,
  Paragraph
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const Alert: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    className,
    title,
    text,
    variant = 'outlined',
    icon    = AlertCircleIcon,
    role    = 'alert',
    ...otherProps
  } = props;

  const classNames = clsx(className, classes['alert'], {
    [classes[`alert--variant-${variant}`]]: variant
  });

  return (
    <section ref={ref} className={classNames} role={role} {...otherProps}>
      <header className={classes['alert-header']}>
        <Icon src={icon} />
        <Heading level="6" color="current">
          {title}
        </Heading>
      </header>
      <div className={classes['alert-content']}>
        <Paragraph color="current">
          {text}
        </Paragraph>
      </div>
    </section>
  );

};

export default forwardRef(Alert);